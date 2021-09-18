import { format } from "util";
import express from "express";
import Multer from "multer";
import { Storage } from "@google-cloud/storage";
import cors from "cors";

// Instantiate a storage client
const storage = new Storage();

const app = express();
app.use(cors());
// This middleware is available in Express v4.16.0 onwards
app.use(express.json());

// Multer is required to process file uploads and make them available via
// req.files.
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

// A bucket is a container for objects (files).
const bucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);

// Process the file upload and upload to Google Cloud Storage.
app.post('*', multer.any(), (req, res, next) => {
  console.log("Called");
  console.log("Files", req.files);
  console.log("Body", req.body);
  if (!req.file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  // Create a new blob in the bucket and upload the file data.
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  blobStream.on('error', err => {
    next(err);
  });

  blobStream.on('finish', () => {
    // The public URL can be used to directly access the file via HTTP.
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    );
    res.status(200).send(publicUrl);
  });

  blobStream.end(req.file.buffer);
});

export const run = app;
