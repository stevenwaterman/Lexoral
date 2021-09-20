import ffmpeg from "fluent-ffmpeg";
import { File, Storage } from "@google-cloud/storage";
import admin from "firebase-admin";

/**
 * Triggered from a change to a Cloud Storage bucket.
 */
export async function run({ name }: { name: string }) {
  const store = admin.initializeApp().firestore()
  const {userDoc, transcriptDoc, pendingPaymentDuration} = await preChecks(name, store);

  const storage = new Storage();
  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);
  const sourceFile = sourceBucket.file(name);

  let roundedDuration: number;
  if (pendingPaymentDuration === undefined) {
    const durationSeconds = await transcodePlayback(storage, name, sourceFile);
    roundedDuration = Math.round(durationSeconds);
  } else {
    roundedDuration = parseInt(pendingPaymentDuration);
  }

  store.runTransaction(async transaction => {
    const user = await transaction.get(userDoc);
    const creditString = user.get("secondsCredit");
    const credit = parseInt(creditString);

    transaction.update(transcriptDoc, { duration: roundedDuration.toString() });

    if (credit < roundedDuration) {
      transaction.update(transcriptDoc, { stage: "mid-transcode-payment-required" });
      return
    }

    const newCredit = credit - roundedDuration;
    transaction.update(userDoc, { secondsCredit: newCredit.toString() });
  });

  await transcodeEnvelope(storage, name, sourceFile)
  await transcodeTranscribe(storage, name, sourceFile)
}

async function preChecks(name: string, store: FirebaseFirestore.Firestore): 
  Promise<{
    userDoc: FirebaseFirestore.DocumentReference,
    transcriptDoc: FirebaseFirestore.DocumentReference,
    pendingPaymentDuration: string | undefined
  }> {

  const [userId, audioId] = name.split("_");
  if (userId === undefined || audioId === undefined) throw new Error("File name formatted wrong: " + name);

  const userDoc = store.doc(`users/${userId}`);
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${audioId}`);
  const [user, transcript] = await Promise.all([userDoc.get(), transcriptDoc.get()]);

  if (!user.exists) throw new Error("User " + userId + " profile missing");
  if (!transcript.exists) throw new Error("Transcript " + userId + "/" + audioId + " doc missing");

  const transcriptStage = transcript.get("stage");
  if (transcriptStage !== "pre-upload" && transcriptStage !== "mid-transcode-payment-required") {
    throw new Error("Transcript " + userId + "/" + audioId + " in wrong stage. Expected pre-upload or mid-transcode, got " + transcriptStage);
  }

  const userCreditString = user.get("creditSeconds");
  const userCredit = parseInt(userCreditString);
  if (userCredit <= 0) throw new Error("User " + userId + " has " + userCreditString + " credit, cannot transcribe");

  const pendingPaymentDuration: string | undefined = transcript.get("duration")

  await transcriptDoc.update({ stage: "pre-transcode" });
  return {userDoc, transcriptDoc, pendingPaymentDuration}
}

async function transcodePlayback(storage: Storage, name: string, sourceFile: File): Promise<number> {
  const playbackBucket = storage.bucket(`${process.env["PROJECT_ID"]}-playback-audio`);
  const playbackFile = playbackBucket.file(`${name}.mp3`);
  const playback = playbackFile.createWriteStream();

  return new Promise<number>(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .audioFilter("loudnorm")
      .noVideo()
      .audioCodec('libmp3lame')
      .audioQuality(2)
      .audioFrequency(22050)
      .format("mp3")
      .output(playback, {end: true})
      .on("end", (_, stderr: string) => {
        const sizeLines = stderr.split("\n").filter(line => line.trimStart().startsWith("size="))
        const line = sizeLines[sizeLines.length - 1];
        if (line === undefined) throw new Error("No size lines in ffmpeg output: " + stderr);

        const regexResult = /time=[^ ]+/.exec(line)
        if (regexResult === null) throw new Error("No time found in ffmpeg size line: " + line);
        const matchString = regexResult[0] as string;
        const timeString = matchString.substring(5);
        const [hourStr, minuteStr, secondStr] = timeString.split(":");
        if (!hourStr || !minuteStr || !secondStr) throw new Error("Missing colon in time string: " + timeString);
        const hour = parseInt(hourStr);
        const minute = parseInt(minuteStr);
        const second = parseFloat(secondStr);

        const totalSeconds = hour * 3600 + minute * 60 + second;
        resolve(totalSeconds)
      })
      .run()
  });
}

async function transcodeEnvelope(storage: Storage, name: string, sourceFile: File): Promise<void> {
  const envelopeBucket = storage.bucket(`${process.env["PROJECT_ID"]}-envelope-audio`);
  const envelopeFile = envelopeBucket.file(`${name}.pcm`);
  const envelope = envelopeFile.createWriteStream();

  return new Promise<void>(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .noVideo()
      .audioFilter("dynaudnorm=g=3")
      .audioFilter("asplit")
      .audioFilter("amultiply")
      .audioFilter("lowpass=f=20")
      .audioFilter("aresample=1000")
      .format("s16le")
      .output(envelope, {end: true})
      .on("end", resolve)
      .run()
  });
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