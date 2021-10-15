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
  const playbackBucket = storage.bucket(`${process.env["PROJECT_ID"]}-playback-audio`);
  const playbackFile = playbackBucket.file(`${name}.mp3`);
  const playback = playbackFile.createWriteStream();

  return new Promise(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .noVideo()
      .audioFilter("aresample=44100")
      .audioBitrate(128) // CBR to allow for seeking
      .format("mp3")
      .output(playback, {end: true})
      .on("end", () => resolve())
      .run()
  });
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
