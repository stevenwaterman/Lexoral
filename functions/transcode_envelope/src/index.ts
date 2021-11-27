import ffmpeg from "fluent-ffmpeg";
import { Storage } from "@google-cloud/storage";
import { Request, Response } from "express";
import admin from "firebase-admin";
import utils from "lexoral-utils";

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);
  const filename = `${user.id}_${transcript.id}`

  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-transcription-audio`);
  const sourceFile = sourceBucket.file(filename);
  const sourceFileUrl = await sourceFile.getSignedUrl({
    action: "read",
    version: "v4",
    expires: Date.now() + 60 * 60 * 1000, // 1 hour
  }).then(([url]) => url)
  .catch(err => {
    console.error(err);
    return null;
  });
  if (!sourceFileUrl) return;

  await transcodeEnvelope(storage, filename, sourceFileUrl);

  res.sendStatus(201);  
}

async function transcodeEnvelope(storage: Storage, name: string, sourceFileUrl: string): Promise<void> {
  const envelopeBucket = storage.bucket(`${process.env["PROJECT_ID"]}-envelope-audio`);
  const envelopeFile = envelopeBucket.file(`${name}.pcm`);
  const envelope = envelopeFile.createWriteStream();

  return new Promise((resolve, reject) => {
    ffmpeg(sourceFileUrl)
      .noVideo()
      .audioFilter("aeval=abs(val(0))")
      .audioFilter("firequalizer=gain='if(lt(f,30), 0, -INF)'")
      .audioFilter("aresample=1000")
      .format("s16le")
      .output(envelope, {end: true})
      .on("end", () => resolve())
      .on("error", err => reject(err))
      .run()
  });
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
