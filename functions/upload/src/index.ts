import { Storage } from "@google-cloud/storage";
import { json, NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import cors from "cors";
import express from "express";

type HydratedRequestInput = Request & { user?: admin.auth.DecodedIdToken };
type HydratedRequest = Request & { user: admin.auth.DecodedIdToken };

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
async function validateFirebaseIdToken(
  req: HydratedRequestInput, 
  res: Response,
  next: NextFunction
) {
  console.log('Check if request is authorized with Firebase ID token');

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
    console.log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if(req.cookies) {
    console.log('Found "__session" cookie');
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    console.log('ID Token correctly decoded', decodedIdToken);
    console.log("Decoded user:", decodedIdToken.email)
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    console.error('Error while verifying Firebase ID token:', error);
    res.status(403).send('Unauthorized');
    return;
  }
};

async function handleRequest(reqInput: HydratedRequestInput, res: Response) {
  const req = reqInput as HydratedRequest;
  console.log("Request handler hit");
  // TODO check if 0 credit, reject early
  // TODO check available credit, reject if not enough

  const name = req.body["name"];
  if (name === undefined) {
    res.status(400).send("Missing 'name' field in body");
    return;
  }

  const collection = db.collection(`users/${req.user.uid}/transcriptions`)
  const audioData = {
    stage: "pre-upload",
    name
  }
  const stored = await collection.add(audioData)
  const audioId = stored.id;
  console.log("Created audio id", audioId);

  const options = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType: 'application/octet-stream',
  } as const;

  await new Storage()
    .bucket(`${process.env["PROJECT_ID"]}-raw-audio`)
    .file(audioId)
    .getSignedUrl(options)
    .then(([url]) => res.status(200).send(url))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
}

admin.initializeApp();
const db = admin.firestore();
const app = express().use(cors()).use(validateFirebaseIdToken).use(json());
app.options("*", cors() as any);
app.post("*", handleRequest);

export const run = app;