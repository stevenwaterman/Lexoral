import admin from "firebase-admin";
import { PubSub } from "@google-cloud/pubsub";

const store = admin.initializeApp().firestore()
const pubSubClient = new PubSub();

export async function run(event: any) {
  const messageData = JSON.parse(Buffer.from(event.data, "base64").toString());
  const { userId, transcriptId } = messageData;
  if (!userId) throw new Error("userId not found in message");
  if (!transcriptId) throw new Error("transcriptId not found in message");

  const userDoc = store.doc(`users/${userId}`);
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  const [user, transcript] = await Promise.all([
    await userDoc.get(),
    await transcriptDoc.get()
  ]);
  if (!transcript.exists) throw new Error("Transcript " + userId + "/" + transcriptId + " doc missing");

  const transcriptStage = transcript.get("stage");
  if (transcriptStage !== "transcoded-envelope") throw new Error("Expected transcript stage transcoded-envelope, got " + transcriptStage);

  const credit = user.get("secondsCredit");
  const duration = transcript.get("duration");

  let paid = false;
  if (credit >= duration) {
    userDoc.update({
      secondsCredit: admin.firestore.FieldValue.increment(-duration)
    });
    paid = true;
  }

  const message = { userId, transcriptId };
  const buffer = Buffer.from(JSON.stringify(message));
  let topicName: string;

  if (paid) {
    await transcriptDoc.update({ stage: "paid" });
    topicName = `projects/${process.env["PROJECT_ID"]}/topics/paid`;
  } else {
    await transcriptDoc.update({ stage: "not-paid" });
    topicName = `projects/${process.env["PROJECT_ID"]}/topics/not-paid`;
  }

  await pubSubClient.topic(topicName).publish(buffer);
}
