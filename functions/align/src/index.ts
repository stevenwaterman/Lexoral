import { protos } from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";
import admin from "firebase-admin";
import utils from "lexoral-utils";
import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

type SpeechResponse = protos.google.cloud.speech.v1p1beta1.IRecognizeResponse;
type Result = protos.google.cloud.speech.v1p1beta1.ISpeechRecognitionResult;

type OutputSection = {
  startTime: number;
  endTime: number;
  options: string[];
}
type Output = OutputSection[];

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAll(req, res, store);
  const filename = `${user.id}_${transcript.id}`;

  await utils.storage.readBuffer(storage, "transcripts-raw", filename)
    .then(buf => buf.toString("utf8"))
    .then(str => JSON.parse(str))
    .then(json => transform(json))
    .then(aligned => utils.storage.writeJson(storage, "transcripts-aligned", filename, aligned));
  res.sendStatus(201);
}

const functionURL = `https://europe-west2-${process.env["PROJECT_ID"]}.cloudfunctions.net/align_worker`;
const metadataServerURL = "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=";
const tokenUrl = metadataServerURL + functionURL;

async function transform(response: SpeechResponse): Promise<Output> {
  if (!response.results) return [];

  const token = await axios.get<string>(tokenUrl, {
    headers: {
      'Metadata-Flavor': 'Google'
    }
  }).then(res => res.data);

  console.log(`Invoking ${response.results.length} workers`);
  const promises = response.results.map(result => invokeAligner(result, token));
  console.log("Waiting for workers");
  const results = await Promise.all(promises);
  console.log("Workers done");
  return results.flat();
}

async function invokeAligner(result: Result, token: string): Promise<OutputSection[]> {
  return axios.post<Result, AxiosResponse<OutputSection[]>>(functionURL, result, {
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json"
    },
  }).then(res => res.data);
}

const store = admin.initializeApp().firestore();
const storage: Storage = new Storage();
export const run = utils.http.get(handleRequest);
