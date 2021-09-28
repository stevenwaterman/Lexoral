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
  const audio = await transcodeEnvelope(storage, filename, sourceFile);
  await transcript.doc.update({ stage: "transcoded-envelope", audio });
}

type EnvelopeMetadata = {
  duration: number;
  format: string;
  channels: number;
  sampleRate: number;
}

async function transcodeEnvelope(storage: Storage, name: string, sourceFile: File): Promise<EnvelopeMetadata> {
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
      .on("end", (_, stderr: string) => {
        const lines = stderr.split("\n");
        const duration = getDuration(lines);
        const { format, sampleRate, channels } = getMetadata(lines);
        resolve({ duration, format, sampleRate, channels })
      })
      .run()
  });
}

function getDuration(lines: string[]): number {
  const sizeLines = lines.filter(line => line.trimStart().startsWith("size="))
  const sizeLine = sizeLines[sizeLines.length - 1];
  if (sizeLine === undefined) throw new Error("No size lines in ffmpeg output: " + lines);

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
  return totalSeconds;
}

const channelMap: Record<string, number | undefined> = {
  mono: 1,
  stereo: 2
}

function getMetadata(lines: string[]): {
  format: string,
  sampleRate: number,
  channels: number
} {
  // eg: Stream #0:0: Audio: mp3, 44100 Hz, mono, s16p, 100 kb/s
  const streamLines = lines.filter(line => line.trimStart().startsWith("Stream #0:0: Audio: "))
  const streamLine = streamLines[0];
  if (streamLine === undefined) throw new Error("No stream lines found in ffmpeg output: " + lines);
  const [streamString, sampleRateHz, channelString] = streamLine.split(", ");
  const [_, format] = streamString.split("Audio: ");
  const [sampleRateStr] = sampleRateHz.split(" ");
  const sampleRate = parseInt(sampleRateStr);
  const channels: number | undefined = channelMap[channelString];
  if (channels === undefined) throw new Error("Unrecognised channel layout: " + channelString);
  return { format, sampleRate, channels };
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
