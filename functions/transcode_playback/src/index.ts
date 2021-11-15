import ffmpeg from "fluent-ffmpeg";
import { File, Storage } from "@google-cloud/storage";
import { Request, Response } from "express";
import admin from "firebase-admin";
import utils from "lexoral-utils";

const bitrate = 128;

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);
  const filename = `${user.id}_${transcript.id}`

  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-transcription-audio`);
  const sourceFile = sourceBucket.file(filename);

  const destBucket = storage.bucket(`${process.env["PROJECT_ID"]}-playback-audio`);
  const destFile = destBucket.file(`${filename}.mp3`);

  await transcodePlayback(sourceFile, destFile);

  const [metadata] = await destFile.getMetadata();
  const size: number = metadata.size;
  const duration: number = size / bitrate;
  await transcript.doc.update({ audio: { duration }});

  res.sendStatus(201);  
}

async function transcodePlayback(sourceFile: File, destFile: File): Promise<void> {
  return new Promise(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .noVideo()
      .audioFilter("aresample=44100")
      .audioBitrate(bitrate) // CBR to allow for seeking
      .format("mp3")
      .output(destFile.createWriteStream(), {end: true})
      .on("end", () => resolve())
      .run()
  });
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
