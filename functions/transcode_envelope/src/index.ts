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

  const transcodePromise = transcodeEnvelope(storage, filename, sourceFileUrl);

  const metadata = await getMetadata(sourceFile);
  await transcript.doc.set({ audio: metadata }, { merge: true });

  await transcodePromise;

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
      .run()
  });
}

function getMetadata(sourceFile: File): Promise<{
  format: string,
  sampleRate: number,
  channels: number
}> {
  return new Promise((resolve, reject) => {
    ffmpeg(sourceFile.createReadStream())
      .ffprobe((err, data) => {
        if (err) return reject("FFProbe error: " + err);

        const format = data.format.format_name;
        if (format === undefined) return reject("Format not found: " + JSON.stringify(data));

        const stream = data.streams.find(stream => stream.codec_type === "audio");
        if (stream === undefined) return reject("Stream not found: " + JSON.stringify(data));

        const sampleRate = stream.sample_rate;
        if (sampleRate === undefined) return reject("Sample Rate not found: " + JSON.stringify(data));

        const channels = stream.channels;
        if (channels === undefined) return reject("Channels not found: " + JSON.stringify(data));

        resolve({ format, sampleRate, channels });
      });
  });
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
