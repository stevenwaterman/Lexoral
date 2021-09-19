import ffmpeg from "fluent-ffmpeg";
import { Storage } from "@google-cloud/storage";
import admin from "firebase-admin";
import fs from "fs";

/**
 * Triggered from a change to a Cloud Storage bucket.
 */
export async function run({ name }: { name: string }) {
  const [userId, audioId] = name.split("_");

  if (userId === undefined || audioId === undefined) {
    throw new Error("File name formatted wrong: " + name);
  }

  admin.initializeApp();
  const store = admin.firestore()

  const userDoc = store.doc(`users/${userId}`);
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${audioId}`);

  const [preUser, preTranscript] = await Promise.all([userDoc.get(), transcriptDoc.get()]);

  if (!preUser.exists) throw new Error("User " + userId + " profile missing");
  if (!preTranscript.exists) throw new Error("Transcript " + userId + "/" + audioId + " doc missing");

  const preTranscriptStage = preTranscript.get("stage");
  if (preTranscriptStage !== "pre-upload") throw new Error("Transcript " + userId + "/" + audioId + " in wrong stage. Expected pre-upload, got " + preTranscriptStage);

  const preUserCreditString = preUser.get("creditSeconds");
  const preUserCredit = parseInt(preUserCreditString)
  if (preUserCredit <= 0) throw new Error("User " + userId + " has " + preUserCreditString + " credit, cannot transcribe");

  await transcriptDoc.update({ stage: "pre-transcode" })

  // TODO watch user for updates rather than fetching again

  const storage = new Storage();
  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);
  const sourceFile = sourceBucket.file(name);

  const playbackBucket = storage.bucket(`${process.env["PROJECT_ID"]}-playback-audio`);
  const playbackFile = playbackBucket.file(`${name}.mp3`);
  const playback = playbackFile.createWriteStream();

  const durationSeconds = await new Promise<number>(resolve => {
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

  const roundedDuration = Math.round(durationSeconds);

  store.runTransaction(async transaction => {
    const user = await transaction.get(userDoc);
    const creditString = user.get("secondsCredit")
    const credit = parseInt(creditString);

    if (credit < roundedDuration) {
      transcriptDoc.update({ stage: "mid-transcode-payment-required" });
      return
    }

    transaction.update(userDoc, { secondsCredit: credit - roundedDuration })
  });

  const transcribeBucket = storage.bucket(`${process.env["PROJECT_ID"]}-transcription-audio`);
  const transcribeFile = transcribeBucket.file(`${name}.wav`);
  const transcribe = transcribeFile.createWriteStream();

  await new Promise<void>(resolve => {
    ffmpeg(sourceFile.createReadStream())
      .audioFilter("loudnorm")
      .noVideo()
      .audioFrequency(44100)
      .audioChannels(1)
      .format("wav")
      .output(transcribe, {end: true})
      .on("end", resolve)
      .run()
  });
}
