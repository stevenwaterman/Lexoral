import ffmpeg from "fluent-ffmpeg";
import { Storage } from "@google-cloud/storage";

/**
 * Triggered from a change to a Cloud Storage bucket.
 */
export async function run({ name }: { name: string }) {
  const [userId, audioId] = name.split("_");

  if (userId === undefined || audioId === undefined) {
    throw new Error("File name formatted wrong: " + name);
  }

  const storage = new Storage();
  const sourceBucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);
  const source = sourceBucket.file(name);

  const destinationBucket = storage.bucket(`${process.env["PROJECT_ID"]}-playback-audio`);
  const destination = destinationBucket.file(`${name}.mp3`);

  await new Promise<void>(resolve => {
    ffmpeg(source.createReadStream())
      .noVideo()
      .output(destination.createWriteStream())
      .audioCodec("libmp3lame")
      .on("end", () => resolve())
      .run();
  });
  
  console.log("done");
}
