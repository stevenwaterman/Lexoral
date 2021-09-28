import { Storage } from "@google-cloud/storage";
import { Readable } from "stream";

function getBucketName(name: string): string {
  return `${process.env["PROJECT_ID"]}-${name}`;
}

export async function writeJson(storage: Storage, bucketName: string, filename: string, data: any): Promise<void> {
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

export async function readBuffer(storage: Storage, bucketName: string, filename: string): Promise<Buffer> {
  const bucket = storage.bucket(getBucketName(bucketName));
  const file = bucket.file(filename);
  return streamToBuffer(file.createReadStream());
}
