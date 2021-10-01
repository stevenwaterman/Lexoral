import type { Request, Response } from "express";
import admin from "firebase-admin";
import utils from "lexoral-utils";
import { Storage } from "@google-cloud/storage";

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAllAuth(req, res, store);

  await Promise.all([
    transcript.doc.delete(),
    utils.storage.deleteFromAll(storage, user.id, transcript.id)
  ])

  res.sendStatus(200);
}

const storage = new Storage();
const store = admin.initializeApp().firestore();
export const run = utils.http.del(handleRequest);
