import ffmpeg from "fluent-ffmpeg";
import { File, Storage } from "@google-cloud/storage";
import { Request, Response } from "express";
import admin from "firebase-admin";
import utils from "lexoral-utils";

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);
  const filename = `${user.id}_${transcript.id}`

  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);
  const sourceFile = sourceBucket.file(filename);
  await transcodePlayback(storage, filename, sourceFile);

  res.sendStatus(201);  
}

async function transcodePlayback(storage: Storage, name: string, sourceFile: File): Promise<void> {
  const transcriptionBucket = storage.bucket(`${process.env["PROJECT_ID"]}-transcription-audio`);
  const transcriptionFile = transcriptionBucket.file(name);
  const transcriptionStream = transcriptionFile.createWriteStream();

  return new Promise(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .noVideo()
      .format("wav")
      .audioCodec('pcm-mulaw')
      .output(transcriptionStream, {end: true})
      .on("end", () => resolve())
      .run()
  });
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
