import speech, { protos } from "@google-cloud/speech";
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
  if (transcriptStage !== "transcoded-transcription") throw new Error("Expected transcript stage transcoded-transcription, got " + transcriptStage);

  const speechClient = new speech.v1p1beta1.SpeechClient();
  const inputUri: string = `gs://${process.env["PROJECT_ID"]}-transcription-audio/${userId}_${transcriptId}.wav`;
  const outputUri: string = `gs://${process.env["PROJECT_ID"]}-transcripts-raw/${userId}_${transcriptId}`;

  const config: protos.google.cloud.speech.v1p1beta1.IRecognitionConfig = {
    encoding: "LINEAR16",
    languageCode: "en-US",
    maxAlternatives: 5,
    audioChannelCount: 1,
    enableAutomaticPunctuation: true,
    enableWordTimeOffsets: true,
    useEnhanced: true,
    model: "video",
  };

  speechClient.longRunningRecognize({ 
    audio: { uri: inputUri },
    outputConfig: { gcsUri: outputUri },
    config
  });

  await transcriptDoc.update({ stage: "transcription-sent" });
}
