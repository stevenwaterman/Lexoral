import admin from "firebase-admin";
import utils from "lexoral-utils";
import { Request, Response } from "express";

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);

  const credit = user.data.get("secondsCredit");
  const duration = transcript.data.get("audio.duration");
  const cost = Math.ceil(duration);

  if (credit >= cost) {
    user.doc.update({
      secondsCredit: admin.firestore.FieldValue.increment(-cost)
    });
    res.sendStatus(200);
  } else {
    res.status(402).send("Insufficent credit");
  }
}

const store = admin.initializeApp().firestore();
export const run = utils.http.get(handleRequest);
