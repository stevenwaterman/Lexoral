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

  const metadata = await getMetadata(sourceFileUrl);
  await transcript.doc.set({ audio: metadata }, { merge: true });

  res.sendStatus(201);  
}

function getMetadata(sourceFileUrl: string): Promise<{
  format: string;
  sampleRate: number;
  channels: number;
  duration: number;
}> {
  return new Promise((resolve, reject) => {
    ffmpeg(sourceFileUrl)
      .ffprobe((err, data) => {
        if (err) return reject("FFProbe error: " + err);

        const format = data.format.format_name;
        if (format === undefined) return reject("Format not found: " + JSON.stringify(data));

        const duration = data.format.duration;
        if (duration === undefined) return reject("Duration not found: " + JSON.stringify(data));
        const roundedDuration = Math.max(1, Math.floor(duration));

        const stream = data.streams.find(stream => stream.codec_type === "audio");
        if (stream === undefined) return reject("Stream not found: " + JSON.stringify(data));

        const sampleRate = stream.sample_rate;
        if (sampleRate === undefined) return reject("Sample Rate not found: " + JSON.stringify(data));

        const channels = stream.channels;
        if (channels === undefined) return reject("Channels not found: " + JSON.stringify(data));


        resolve({ format, sampleRate, channels, duration: roundedDuration });
      });
  });
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
