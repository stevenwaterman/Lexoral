import speech, { protos } from "@google-cloud/speech";
import admin from "firebase-admin";

const store = admin.initializeApp().firestore()
const speechClient = new speech.v1p1beta1.SpeechClient();

const encodingMap: Record<string, protos.google.cloud.speech.v1p1beta1.IRecognitionConfig["encoding"]> = {
  wav: "LINEAR16",
  mp3: "MP3"
}

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
  if (transcriptStage !== "paid") throw new Error("Expected transcript stage paid, got " + transcriptStage);

  const inputUri: string = `gs://${process.env["PROJECT_ID"]}-raw-audio/${userId}_${transcriptId}`;
  const outputUri: string = `gs://${process.env["PROJECT_ID"]}-transcripts-raw/${userId}_${transcriptId}`;

  const format = transcript.get("audio.format");
  const encoding = encodingMap[format];

  const config: protos.google.cloud.speech.v1p1beta1.IRecognitionConfig = {
    encoding,
    sampleRateHertz: transcript.get("audio.sampleRate"),
    audioChannelCount: transcript.get("audio.channels"),

    languageCode: "en-US",
    maxAlternatives: 5,
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
