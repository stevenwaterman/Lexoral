import admin from "firebase-admin";
import { PubSub } from "@google-cloud/pubsub";

/**
 * Triggered from a change to a Cloud Storage bucket.
 */
export async function run({ name }: { name: string }) {
  const [userId, transcriptId] = name.split("_");
  if (userId === undefined || transcriptId === undefined) throw new Error("File name formatted wrong: " + name);

  const store = admin.initializeApp().firestore();
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  const transcript = await transcriptDoc.get();
  if (!transcript.exists) throw new Error("Transcript does not exist: " + name)
  const stage = transcript.get("stage");
  if (stage !== "transcription-sent") throw new Error("Transcript in wrong stage, expected transcription-sent got " + stage);

  await transcriptDoc.update({ stage: "transcribed" });

  const message = { userId, transcriptId };
  const pubSubClient = new PubSub();
  const buffer = Buffer.from(JSON.stringify(message));
  const topicName = `projects/${process.env["PROJECT_ID"]}/topics/transcribed`;
  await pubSubClient.topic(topicName).publish(buffer);
}