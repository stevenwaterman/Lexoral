import { Storage } from "@google-cloud/storage";
import express, { json, NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import cors from "cors";
import { FieldValue } from "@google-cloud/firestore";

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
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if(req.cookies) {
    idToken = req.cookies.__session;
  } else {
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

  const name = req.body["name"];
  if (name === undefined) {
    res.status(400).send("Missing 'name' field in body");
    return;
  }

  const userDoc = await store.doc(`users/${req.user.uid}`).get();
  if (!userDoc.exists) {
    res.status(500).send("User profile missing, contact support");
    return;
  }

  const credit = userDoc.get("secondsCredit");
  if (credit <= 0) {
    res.status(402).send("Account has no credit");
    return;
  }

  const transcriptData = { 
    stage: "pre-upload",
    name,
    duration: -1,
    created: FieldValue.serverTimestamp,
    updated: FieldValue.serverTimestamp
  };
  const stored = await store.collection(`users/${req.user.uid}/transcripts`).add(transcriptData);
  const transcriptId = stored.id;

  console.log("Created transcript id", transcriptId);

  const options = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType: 'application/octet-stream',
  } as const;

  await bucket.file(`${req.user.uid}_${transcriptId}`)
    .getSignedUrl(options)
    .then(([url]) => res.status(200).send(url))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
}

const store = admin.initializeApp().firestore();
const bucket = new Storage().bucket(`${process.env["PROJECT_ID"]}-raw-audio`)

const app = express().use(cors()).use(validateFirebaseIdToken).use(json());
app.options("*", cors() as any);
app.post("*", handleRequest);

export const run = app;