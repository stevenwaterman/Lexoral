import admin from "firebase-admin";
import { PubSub } from "@google-cloud/pubsub";
import { test } from "lexoral-utils";

const store = admin.initializeApp().firestore();
const pubSubClient = new PubSub();

export async function run({ name }: { name: string }) {
  console.log(test)
  const [userId, transcriptId] = name.split("_");
  if (userId === undefined || transcriptId === undefined) throw new Error("File name formatted wrong: " + name);

  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  const transcript = await transcriptDoc.get();
  if (!transcript.exists) throw new Error("Transcript does not exist: " + name)
  const stage = transcript.get("stage");
  if (stage !== "pre-upload") throw new Error("Transcript in wrong stage, expected pre-upload got " + stage);

  await transcriptDoc.update({ stage: "post-upload" });

  const message = { userId, transcriptId };
  const buffer = Buffer.from(JSON.stringify(message));
  const topicName = `projects/${process.env["PROJECT_ID"]}/topics/post-upload`;
  await pubSubClient.topic(topicName).publish(buffer);
}