import admin from "firebase-admin";
import utils from "lexoral-utils";
import { Request, Response } from "express";
import { Storage } from "@google-cloud/storage";

const bitrateKbps = 128;
const bytesPerSecond = bitrateKbps / 8 * 1024;

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);

  const filename = `${user.id}_${transcript.id}`;
  const bucket = storage.bucket(`${process.env["PROJECT_ID"]}-playback-audio`);
  const file = bucket.file(`${filename}.mp3`);

  const [metadata] = await file.getMetadata();
  const size = metadata.size;
  const duration = size / bytesPerSecond;
  const roundedDuration = Math.ceil(duration);
  await transcript.doc.set({ audio: { duration: roundedDuration }}, { merge: true });

  const credit = user.data.get("secondsCredit");

  if (credit >= roundedDuration) {
    user.doc.update({
      secondsCredit: admin.firestore.FieldValue.increment(-roundedDuration)
    });
    res.sendStatus(200);
  } else {
    res.status(402).send("Insufficent credit");
  }
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
