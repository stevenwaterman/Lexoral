import { Storage } from "@google-cloud/storage";
import type { Request, Response } from "express";
import admin from "firebase-admin";
import express from "express";
import utils from "lexoral-utils";

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAllAuth(req, res, store);
  const filename = `${user.id}_${transcript.id}`;

  const transcriptJson = await utils.storage.readBuffer(storage, "transcripts", `${filename}.json`)
    .then(buffer => buffer.toString("utf8"))
    .then(str => JSON.parse(str));

  const audioBucket = storage.bucket(`${process.env["PROJECT_ID"]}-raw-audio`);
  const audioFile = audioBucket.file(filename);
  const audioFileUrl = await audioFile.getSignedUrl({
    action: "read",
    version: "v4",
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  }).then(([url]) => url)
  .catch(err => {
    console.error(err);
    res.status(500).send("Error generating signed audio url");
    return null;
  });
  if (!audioFileUrl) return;

  const transcriptName = transcript.data.get("name");

  const response = {
    audioUrl: audioFileUrl,
    transcript: transcriptJson,
    name: transcriptName
  };
  
  res.status(200).contentType("json").send(response);
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
