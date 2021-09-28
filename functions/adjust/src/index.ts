import { Storage } from "@google-cloud/storage";
import type { Request, Response } from "express";
import admin from "firebase-admin";
import utils from "lexoral-utils";

type OutputSection = {
  startTime: number;
  endTime: number;
  options: string[];
}
type Output = OutputSection[];

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);
  const filename = `${user.id}_${transcript.id}`;

  const alignedPromise: Promise<Output> =
    utils.storage.readBuffer(storage, "transcripts-aligned", filename)
      .then(buffer => buffer.toString("utf8"))
      .then(str => JSON.parse(str));

  const envelopePromise: Promise<Int16Array> = 
    utils.storage.readBuffer(storage, "envelope-audio", `${filename}.pcm`)
      .then(buf => new Int16Array(buf));

  const [aligned, envelope] = await Promise.all([alignedPromise, envelopePromise]);

  aligned.forEach(section => {
    section.startTime = adjustTime(section.startTime, envelope);
    section.endTime = adjustTime(section.endTime, envelope);
  });

  await utils.storage.writeJson(storage, "transcripts", `${user.id}_${transcript.id}.json`, aligned);
  res.sendStatus(200);
}

function adjustTime(time: number, envelope: Int16Array): number {
  const sample = Math.floor(time * 1000);
  const searchStart = Math.max(0, sample - 49);
  const searchEnd = Math.min(envelope.length, sample + 49);

  let minIdx: number | null = null;
  let minValue: number | null = null;
  for (let i = searchStart; i < searchEnd; i++) {
    const value = envelope[i];
    if (minValue === null || value < minValue) {
      minIdx = i;
      minValue = value;
    }
  }

  const adjustedSample = minIdx ?? sample;
  const adjustedTime = adjustedSample / 1000;
  return adjustedTime;
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
