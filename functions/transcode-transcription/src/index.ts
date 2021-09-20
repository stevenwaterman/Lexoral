import ffmpeg from "fluent-ffmpeg";
import { File, Storage } from "@google-cloud/storage";
import { PubSub } from "@google-cloud/pubsub";
import admin from "firebase-admin";

export async function run(event: any) {
  const messageData = JSON.parse(Buffer.from(event.data, "base64").toString());
  const { userId, transcriptId } = messageData;
  if (!userId) throw new Error("userId not found in message");
  if (!transcriptId) throw new Error("transcriptId not found in message");

  const store = admin.initializeApp().firestore()

  const userDoc = store.doc(`users/${userId}`);
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  const [user, transcript] = await Promise.all([userDoc.get(), transcriptDoc.get()]);
  if (!user.exists) throw new Error("User " + userId + " profile missing");
  if (!transcript.exists) throw new Error("Transcript " + userId + "/" + transcriptId + " doc missing");

  const transcriptStage = transcript.get("stage");
  if (transcriptStage !== "paid") throw new Error("Expected transcript stage paid, got " + transcriptStage)

  const storage = new Storage();
  const filename = `${userId}_${transcriptId}`

  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);
  const sourceFile = sourceBucket.file(filename);

  await transcodeTranscribe(storage, filename, sourceFile);

  await transcriptDoc.update({ stage: "transcoded-transcription" });

  const message = { userId, transcriptId };
  const pubSubClient = new PubSub();
  const buffer = Buffer.from(JSON.stringify(message));
  const topicName = `projects/${process.env["PROJECT_ID"]}/topics/transcoded-transcription`;
  await pubSubClient.topic(topicName).publish(buffer);
}

async function transcodeTranscribe(storage: Storage, name: string, sourceFile: File): Promise<void> {
  const transcribeBucket = storage.bucket(`${process.env["PROJECT_ID"]}-transcription-audio`);
  const transcribeFile = transcribeBucket.file(`${name}.wav`);
  const transcribe = transcribeFile.createWriteStream();

  return new Promise<void>(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .noVideo()
      .audioFrequency(16000)
      .audioChannels(1)
      .format("wav")
      .output(transcribe, {end: true})
      .on("end", resolve)
      .run()
  });
}