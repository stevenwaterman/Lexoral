import ffmpeg from "fluent-ffmpeg";
import { File, Storage } from "@google-cloud/storage";
import { PubSub } from "@google-cloud/pubsub";
import admin from "firebase-admin";

const store = admin.initializeApp().firestore()
const storage = new Storage();
const pubSubClient = new PubSub();

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
  if (transcriptStage !== "post-upload") throw new Error("Expected transcript stage post-upload, got " + transcriptStage)

  const credit = user.get("secondsCredit");
  if (credit <= 0) throw new Error("User " + userId + " has " + credit + " credit, cannot transcribe");

  const filename = `${userId}_${transcriptId}`

  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);
  const sourceFile = sourceBucket.file(filename);

  const durationSeconds = await transcodePlayback(storage, filename, sourceFile);
  const roundedDuration = Math.round(durationSeconds);

  await transcriptDoc.update({ stage: "transcoded-playback", duration: roundedDuration });

  const message = { userId, transcriptId };
  const buffer = Buffer.from(JSON.stringify(message));
  const topicName = `projects/${process.env["PROJECT_ID"]}/topics/transcoded-playback`;
  await pubSubClient.topic(topicName).publish(buffer);
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
