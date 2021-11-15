import admin from "firebase-admin";
import utils from "lexoral-utils";
import { Request, Response } from "express";
import { Storage } from "@google-cloud/storage";

const bitrate = 128;

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);

  const filename = `${user.id}_${transcript.id}`;
  const bucket = storage.bucket(`${process.env["PROJECT_ID"]}-playback-audio`);
  const file = bucket.file(`${filename}.mp3`);
  const [metadata] = await file.getMetadata();
  const size = metadata.size;
  const duration = size / bitrate;
  console.log(size)
  await transcript.doc.set({ audio: { duration }}, { merge: true });

  const credit = user.data.get("secondsCredit");

  if (credit >= duration) {
    user.doc.update({
      secondsCredit: admin.firestore.FieldValue.increment(-duration)
    });
    res.sendStatus(200);
  } else {
    res.status(402).send("Insufficent credit");
  }
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
