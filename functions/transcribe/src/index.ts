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

  const sampleRateHertz = transcript.data.get("audio.sampleRate");
  const audioChannelCount = transcript.data.get("audio.channels");

  if (encoding === null || encoding === undefined) throw new Error("Unrecognised format: " + format);
  if (sampleRateHertz < 6_000 || sampleRateHertz > 200_000) throw new Error("Sample rate is probably wrong: " + sampleRateHertz);
  if (audioChannelCount < 1 || audioChannelCount > 10) throw new Error("Audio channel count is probably wrong: " + audioChannelCount);

  const config: protos.google.cloud.speech.v1p1beta1.IRecognitionConfig = {
    encoding,
    sampleRateHertz,
    audioChannelCount,

    languageCode: "en-US",
    maxAlternatives: 5,
    enableAutomaticPunctuation: false,
    enableWordTimeOffsets: true,
    useEnhanced: true,
    model: "video"
  };

  await speechClient.longRunningRecognize({ 
    audio: { uri: inputUri },
    outputConfig: { gcsUri: outputUri },
    config
  });

  res.sendStatus(200);
}

const speechClient = new speech.v1p1beta1.SpeechClient();
const store = admin.initializeApp().firestore();
export const run = utils.http.get(handleRequest);
