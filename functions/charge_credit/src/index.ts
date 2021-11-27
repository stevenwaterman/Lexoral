import admin from "firebase-admin";
import utils from "lexoral-utils";
import { Request, Response } from "express";

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);

  const duration = transcript.data.get("audio.duration");
  const roundedDuration = Math.max(1, Math.floor(duration));

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
export const run = utils.http.get(handleRequest);
