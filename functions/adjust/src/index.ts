import { Readable } from "stream";
import { Storage } from "@google-cloud/storage";
import admin from "firebase-admin";

type OutputSection = {
  startTime: number;
  endTime: number;
  options: string[];
}
type Output = OutputSection[];

const store = admin.initializeApp().firestore();
const storage = new Storage();
const envelopeBucket = storage.bucket(`${process.env["PROJECT_ID"]}-envelope-audio`);
const transcriptBucket = storage.bucket(`${process.env["PROJECT_ID"]}-transcripts`);

export async function run(event: any) {
  const messageData = JSON.parse(Buffer.from(event.data, "base64").toString());
  const { userId, transcriptId, aligned }: { userId?: string, transcriptId?: string, aligned?: Output} = messageData;
  if (!userId) throw new Error("userId not found in message");
  if (!transcriptId) throw new Error("transcriptId not found in message");
  if (!aligned) throw new Error("aligned not found in message");

  const userDoc = store.doc(`users/${userId}`);
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  const [user, transcript] = await Promise.all([userDoc.get(), transcriptDoc.get()]);
  if (!user.exists) throw new Error("User " + userId + " profile missing");
  if (!transcript.exists) throw new Error("Transcript " + userId + "/" + transcriptId + " doc missing");

  const transcriptStage = transcript.get("stage");
  if (transcriptStage !== "transcribed") throw new Error("Expected transcript stage aligned, got " + transcriptStage)

  const envelope = await readEnvelope(userId, transcriptId);

  aligned.forEach(section => {
    section.startTime = adjustTime(section.startTime, envelope);
    section.endTime = adjustTime(section.endTime, envelope);
  });

  await writeTranscript(userId, transcriptId, aligned);

  await transcriptDoc.update({ stage: "ready" });
}

async function streamToString (stream: Readable): Promise<Buffer> {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  })
}

async function readEnvelope(userId: string, transcriptId: string): Promise<Int16Array> {
  const file = envelopeBucket.file(`${userId}_${transcriptId}.pcm`);
  const byteBuffer = await streamToString(file.createReadStream());
  return new Int16Array(byteBuffer.buffer);
}

async function writeTranscript(userId: string, transcriptId: string, adjusted: Output): Promise<void> {
  return new Promise<void>(resolve => {
    const outputFile = transcriptBucket.file(`${userId}_${transcriptId}.json`);
    const outputStream = outputFile.createWriteStream();
    const transcriptString = JSON.stringify(adjusted);
    outputStream.write(transcriptString, () => resolve());
  })
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
