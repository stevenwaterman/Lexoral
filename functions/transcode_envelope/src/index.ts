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
  const durationPromise = transcodeEnvelope(storage, filename, sourceFile);
  const metadataPromise = getMetadata(sourceFile);

  const [duration, metadata] = await Promise.all([durationPromise, metadataPromise]);
  const audio = {
    duration,
    ...metadata
  };
  await transcript.doc.update({ audio });

  res.sendStatus(201);  
}

async function transcodeEnvelope(storage: Storage, name: string, sourceFile: File): Promise<number> {
  const envelopeBucket = storage.bucket(`${process.env["PROJECT_ID"]}-envelope-audio`);
  const envelopeFile = envelopeBucket.file(`${name}.pcm`);
  const envelope = envelopeFile.createWriteStream();

  return new Promise(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .noVideo()
      .audioFilter("aeval=abs(val(0))")
      .audioFilter("firequalizer=gain='if(lt(f,30), 0, -INF)'")
      .audioFilter("aresample=1000")
      .format("s16le")
      .output(envelope, {end: true})
      .on("end", (_, stderr: string) => resolve(getDuration(stderr.split("\n"))))
      .run()
  });
}

function getDuration(lines: string[]): number {
  const sizeLine = lines.find(line => line.trimStart().startsWith("size="))
  if (sizeLine === undefined) throw new Error("No size lines in ffmpeg output: " + JSON.stringify(lines));

  const regexResult = /time=[^ ]+/.exec(sizeLine)
  if (regexResult === null) throw new Error("No time found in ffmpeg size line: " + sizeLine);
  const matchString = regexResult[0] as string;
  const timeString = matchString.substring(5);
  const [hourStr, minuteStr, secondStr] = timeString.split(":");
  if (!hourStr || !minuteStr || !secondStr) throw new Error("Missing colon in time string: " + timeString);
  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);
  const second = parseFloat(secondStr);

  const totalSeconds = hour * 3600 + minute * 60 + second;
  const rounded = Math.ceil(totalSeconds);
  return rounded;
}

function getMetadata(sourceFile: File): Promise<{
  format: string,
  sampleRate: number,
  channels: number
}> {
  return new Promise(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .ffprobe((err, data) => {
        if (err) throw new Error("FFProbe error: " + err);

        const format = data.format.format_name;
        if (format === undefined) throw new Error("Format not found: " + JSON.stringify(data));

        const stream = data.streams[0];
        if (stream === undefined) throw new Error("Stream not found: " + JSON.stringify(data));

        const sampleRate = stream.sample_rate;
        if (sampleRate === undefined) throw new Error("Sample Rate not found: " + JSON.stringify(data));

        const channels = stream.channels;
        if (channels === undefined) throw new Error("Channels not found: " + JSON.stringify(data));

        resolve({ format, sampleRate, channels });
      });
  });
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
