import { Storage } from "@google-cloud/storage";
import { Request, Response } from "express";
import admin from "firebase-admin";
import { FieldValue } from "@google-cloud/firestore";
import utils from "lexoral-utils";

async function handleRequest(req: Request, res: Response) {
  const user = await utils.auth.check(req, res);
  const userDoc = store.doc(`users/${user.uid}`);
  const userData = await userDoc.get();

  const credit = userData.get("secondsCredit");
  if (credit <= 0) {
    res.status(402).send("Account has no credit");
    return;
  }

  const name = req.body["name"];
  if (name === undefined) {
    res.status(400).send("Missing 'name' field in body");
    return;
  }

  const transcriptData = { 
    name,
    audio: {
      duration: -1,
    },
    stage: "uploading",
    created: FieldValue.serverTimestamp(),
    updated: FieldValue.serverTimestamp()
  };
  const transcript = await store.collection(`users/${user.uid}/transcripts`).add(transcriptData);

  console.log("Created transcript id", transcript.id);

  const options = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType: 'application/octet-stream',
  } as const;

  const bucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`)
  await bucket.file(`${user.uid}_${transcript.id}`)
    .getSignedUrl(options)
    .then(([url]) => res.status(201).send(url));
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.post(handleRequest);
