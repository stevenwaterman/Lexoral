import speech, { protos } from "@google-cloud/speech";
import admin from "firebase-admin";
import utils from "lexoral-utils";
import { Request, Response } from "express";


const encodingMap: Record<string, protos.google.cloud.speech.v1p1beta1.IRecognitionConfig["encoding"]> = {
  wav: "LINEAR16",
  mp3: "MP3"
}

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store)

  const inputUri: string = `gs://${process.env["PROJECT_ID"]}-raw-audio/${user.id}_${transcript.id}`;
  const outputUri: string = `gs://${process.env["PROJECT_ID"]}-transcripts-raw/${user.id}_${transcript.id}`;

  const format = transcript.data.get("audio.format");
  const encoding = encodingMap[format];

  const config: protos.google.cloud.speech.v1p1beta1.IRecognitionConfig = {
    encoding,
    sampleRateHertz: transcript.data.get("audio.sampleRate"),
    audioChannelCount: transcript.data.get("audio.channels"),

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

  await transcript.doc.update({ stage: "transcription-sent" });
  res.sendStatus(200);
}

const speechClient = new speech.v1p1beta1.SpeechClient();
const store = admin.initializeApp().firestore();
export const run = utils.http.get(handleRequest);
