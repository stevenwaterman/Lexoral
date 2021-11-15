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
  const durationPromise = transcodeEnvelope(storage, filename, sourceFile).catch(reason => console.error("Error transcoding envelope:", reason));
  const metadataPromise = getMetadata(sourceFile).catch(reason => console.error("Error getting metadata:", reason));

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

  return new Promise((resolve, reject) => {
    ffmpeg(sourceFile.createReadStream())
      .noVideo()
      .audioFilter("aeval=abs(val(0))")
      .audioFilter("firequalizer=gain='if(lt(f,30), 0, -INF)'")
      .audioFilter("aresample=1000")
      .format("s16le")
      .output(envelope, {end: true})
      .on("end", (_, stderr: string) => {
        try {
          const duration = getDuration(stderr.split("\n"))
          resolve(duration);
        } catch (err) {
          reject(err);
        }
      })
      .run()
  });
}

function getDuration(lines: string[]): number {
  const sizeLines = lines.filter(line => line.trimStart().startsWith("size="));
  const sizeLine = sizeLines[sizeLines.length - 1];
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
