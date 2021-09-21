import { Storage } from "@google-cloud/storage";
import type { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import corsFactory from "cors";
import express from "express";
import {Readable} from "stream";

type HydratedRequest = Request & { user: admin.auth.DecodedIdToken };
type HydratedRequestInput = Request & { user?: admin.auth.DecodedIdToken };

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
async function validateFirebaseIdToken(
  req: HydratedRequestInput, 
  res: Response,
  next: NextFunction
) {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !(req.cookies && req.cookies.__session)) {
    console.error(
      'No Firebase ID token was passed as a Bearer token in the Authorization header.',
      'Make sure you authorize your request by providing the following HTTP header:',
      'Authorization: Bearer <Firebase ID Token>',
      'or by passing a "__session" cookie.'
    );
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if(req.cookies) {
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    console.error('Error while verifying Firebase ID token:', error);
    res.status(403).send('Unauthorized');
    return;
  }
}

async function handleRequest(reqInput: HydratedRequestInput, res: Response) {
  const req = reqInput as HydratedRequest;

  const userId = req.user.uid;
  const transcriptId: string | undefined = reqInput.query["transcript"]?.toString();
  if (!transcriptId) {
    res.status(400).send("Missing 'transcript' query param");
    return;
  }

  const userDoc = store.doc(`users/${userId}`);
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  const [user, transcript] = await Promise.all([userDoc.get(), transcriptDoc.get()]);
  if (!user.exists) {
    res.status(500).send("User profile missing for user id " + userId);
    return;
  }
  if (!transcript.exists) {
    res.status(404).send("Could not find transcript document " + userId + "/" + transcriptId);
    return;
  }

  const transcriptStage = transcript.get("stage");
  if (transcriptStage !== "ready") {
    res.status(400).send("Transcript is not ready. Expected stage 'ready', was actually " + transcriptStage);
    return;
  }

  const transcriptString = await readTranscript(userId, transcriptId);
  if (!transcriptString) {
    res.status(500).send("Error fetching transcript file");
    return;
  }
  const transcriptJson = JSON.parse(transcriptString);

  const audioFile = audioBucket.file(`${userId}_${transcriptId}.mp3`);
  const audioFileUrl = await audioFile.getSignedUrl({
    action: "read",
    version: "v4",
    contentType: "audio/mp3",
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  }).then(([url]) => url)
  .catch(err => {
    console.error(err);
    res.status(500).send("Error generating signed audio url");
    return null;
  });
  if (!audioFileUrl) return;

  const transcriptName = transcript.get("name");
  const patches = transcript.get("patches") ?? [];

  const response = {
    audioUrl: audioFileUrl,
    transcript: transcriptJson,
    name: transcriptName,
    patches
  };
  
  res.sendStatus(200).contentType("json").send(response);
}

async function streamToString (stream: Readable): Promise<string> {
  const chunks: Buffer[] = [];
  return new Promise<string>((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  })
}

async function readTranscript(userId: string, transcriptId: string): Promise<string | null> {
  const file = transcriptBucket.file(`${userId}_${transcriptId}.json`);
  return streamToString(file.createReadStream()).catch(err => {
    console.error(err);
    return null;
  });
}

const store = admin.initializeApp().firestore();
const storage = new Storage();
const audioBucket = storage.bucket(`${process.env["PROJECT_ID"]}-playback-audio`);
const transcriptBucket = storage.bucket(`${process.env["PROJECT_ID"]}-transcripts`);

const cors = corsFactory({ origin: true });
const app = express().use(cors).use(validateFirebaseIdToken);
app.get("*", handleRequest);

export const run = app;
