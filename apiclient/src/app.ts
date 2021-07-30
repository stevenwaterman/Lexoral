// Imports the Google Cloud client library
import speech, { protos } from '@google-cloud/speech';

// Creates a client
const client = new speech.v1p1beta1.SpeechClient({ projectId: "amie-300613", keyFile: "/home/steven/service.json" });

async function quickstart() {
  const gcsUri: string = 'gs://testing-storage-steven-waterman/untitled2.mp3';

  const audio: protos.google.cloud.speech.v1p1beta1.IRecognitionAudio = { uri: gcsUri };

  const config: protos.google.cloud.speech.v1p1beta1.IRecognitionConfig = {
    encoding: "MP3",
    sampleRateHertz: 44100,
    languageCode: 'en-US',
    maxAlternatives: 5,
    enableAutomaticPunctuation: true,
    enableWordTimeOffsets: true,
    useEnhanced: true,
    model: "video",
  };

  const outputConfig: protos.google.cloud.speech.v1p1beta1.ITranscriptOutputConfig = { gcsUri: `${gcsUri}.json` };

  const [operation] = await client.longRunningRecognize({ audio, config, outputConfig });
  const [response] = await operation.promise();

  // const transcription = response.results
  //   .map(result => result.alternatives[0].transcript)
  //   .join('\n');
  // console.log(`Transcription: ${transcription}`);

}

await quickstart();
