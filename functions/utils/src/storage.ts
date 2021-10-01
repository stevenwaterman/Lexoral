import { Bucket, Storage } from "@google-cloud/storage";
import { Readable } from "stream";

type BucketName = "raw-audio" | "envelope-audio" | "transcripts-raw" | "transcripts-aligned" | "transcripts";

function getBucketName(name: BucketName): string {
  return `${process.env["PROJECT_ID"]}-${name}`;
}

export async function writeJson(storage: Storage, bucketName: BucketName, filename: string, data: any): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const bucket = storage.bucket(getBucketName(bucketName));
    const outputFile = bucket.file(filename);
    const outputStream = outputFile.createWriteStream({ metadata: { contentType: 'text/json' }});
    Readable.from(JSON.stringify(data))
      .pipe(outputStream)
      .on("error", err => reject(err))
      .on("finish", () => resolve());
  });
}

async function streamToBuffer (stream: Readable): Promise<Buffer> {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  })
}

export async function readBuffer(storage: Storage, bucketName: BucketName, filename: string): Promise<Buffer> {
  const bucket = storage.bucket(getBucketName(bucketName));
  const file = bucket.file(filename);
  return streamToBuffer(file.createReadStream());
}

export async function deleteFile(storage: Storage, bucketName: BucketName, filename: string): Promise<void> {
  const bucket = storage.bucket(getBucketName(bucketName));
  const file = bucket.file(filename);
  return file.delete().then(() => {});
}

export async function deleteFromAll(storage: Storage, userId: string, transcriptId: string): Promise<void> {
  const fileName = `${userId}_${transcriptId}`;
  const extensions: Record<BucketName, string> = {
    "raw-audio": "",
    "envelope-audio": ".pcm",
    "transcripts-raw": "",
    "transcripts-aligned": "",
    "transcripts": ".json"
  };
  const buckets = Object.keys(extensions) as Array<keyof typeof extensions>;
  const promises = buckets.map(bucket => 
     deleteFile(storage, bucket, fileName + extensions[bucket])
      .catch(err => console.warn("Error when deleting all: ", JSON.stringify(err)))
  );
  return Promise.all(promises).then(() => {});
}
