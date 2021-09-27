import ffmpeg, { ffprobe } from "fluent-ffmpeg";
import { File, Storage } from "@google-cloud/storage";
import { PubSub } from "@google-cloud/pubsub";
import admin from "firebase-admin";
import Ffmpeg from "fluent-ffmpeg";
import { rejects } from "assert/strict";

const store = admin.initializeApp().firestore()
const storage = new Storage();
const pubSubClient = new PubSub();

export async function run(event: any) {
  const messageData = JSON.parse(Buffer.from(event.data, "base64").toString());
  const { userId, transcriptId } = messageData;
  if (!userId) throw new Error("userId not found in message");
  if (!transcriptId) throw new Error("transcriptId not found in message");

  const userDoc = store.doc(`users/${userId}`);
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  const [user, transcript] = await Promise.all([userDoc.get(), transcriptDoc.get()]);
  if (!user.exists) throw new Error("User " + userId + " profile missing");
  if (!transcript.exists) throw new Error("Transcript " + userId + "/" + transcriptId + " doc missing");

  const transcriptStage = transcript.get("stage");
  if (transcriptStage !== "post-upload") throw new Error("Expected transcript stage post-upload, got " + transcriptStage)

  const filename = `${userId}_${transcriptId}`;

  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);
  const sourceFile = sourceBucket.file(filename);
  const metadata = await inspectAudio(sourceFile);
  
  const streamCount = metadata.format.nb_streams;
  if (streamCount !== 1) throw new Error("Expected 1 stream, actually " + streamCount);

  await transcriptDoc.update({ stage: "transcoded-envelope" });

  const message = { userId, transcriptId };
  const buffer = Buffer.from(JSON.stringify(message));
  const topicName = `projects/${process.env["PROJECT_ID"]}/topics/transcoded-envelope`;
  await pubSubClient.topic(topicName).publish(buffer);
}

async function inspectAudio(sourceFile: File): Promise<Ffmpeg.FfprobeData> {
  return new Promise((resolve, reject) => {
    ffmpeg(sourceFile.createReadStream())
      .ffprobe((err, metadata) => {
        if (err) reject(err);
        resolve(metadata)
      })
    });
}
