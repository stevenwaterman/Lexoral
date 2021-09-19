// Imports the Google Cloud client library
import speech, { protos } from "@google-cloud/speech";

const client = new speech.v1p1beta1.SpeechClient();

/**
 * Triggered from a change to a Cloud Storage bucket.
 */
export function run(event: { name: string }) {
  transcribe(event.name);
}

function transcribe(fileName: string) {
  const gcsUri: string = `gs://${process.env["PROJECT_ID"]}-transcription-audio/${fileName}`;

  const audio: protos.google.cloud.speech.v1p1beta1.IRecognitionAudio = { uri: gcsUri };

  const config: protos.google.cloud.speech.v1p1beta1.IRecognitionConfig = {
    encoding: "LINEAR16",
    sampleRateHertz: 44100,
    languageCode: "en-US",
    maxAlternatives: 5,
    audioChannelCount: 1,
    enableAutomaticPunctuation: true,
    enableWordTimeOffsets: true,
    useEnhanced: true,
    model: "video",
  };

  const outputConfig: protos.google.cloud.speech.v1p1beta1.ITranscriptOutputConfig = { 
    gcsUri: `gs://${process.env["PROJECT_ID"]}-transcripts-raw/${fileName}.json`
  };

  client.longRunningRecognize({ audio, config, outputConfig });
}
