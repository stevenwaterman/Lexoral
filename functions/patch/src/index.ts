import type { Request, Response } from "express";
import admin from "firebase-admin";
import { FieldValue } from "@google-cloud/firestore";
import utils from "lexoral-utils";

type PatchedSectionProps = {
  text: string;
  endParagraph: boolean;
}
type SectionPatch = Partial<PatchedSectionProps>;
type Patch = Record<number, SectionPatch>;
type RequestData = Record<number, Patch>;

async function handleRequest(req: Request, res: Response) {
  const { user, transcript } = await utils.userTranscript.getAllAuth(req, res, store);

  const transcriptStage = transcript.data.get("stage");
  if (transcriptStage !== "ready") {
    res.status(400).send("Transcript is not ready. Was actually " + transcriptStage);
    return;
  }

  const data: RequestData = req.body;

  const patchesCollection = store.collection(`users/${user.id}/transcripts/${transcript.id}/patches`);

  let writtenMaxId: number | undefined = undefined;
  const writes = Object.entries(data)
    .map(([idxString, patch]) => {
      const idx = parseInt(idxString);
      writtenMaxId = Math.max(writtenMaxId ?? idx, idx);

      const docId = idxString.padStart(10, "0");
      return patchesCollection.doc(docId).set(patch);
    });

  const dbMaxIdx: number | undefined = transcript.data.get("maxPatch");
  if (writtenMaxId !== undefined && dbMaxIdx !== undefined) {
    for (let i = writtenMaxId + 1; i <= dbMaxIdx; i++) {
      const docId = i.toString().padStart(10, "0");
      const call = patchesCollection.doc(docId).delete();
      writes.push(call);
    }
  }

  if (writtenMaxId !== undefined) {
    const call = transcript.doc.update({
      maxPatch: writtenMaxId,
      updated: FieldValue.serverTimestamp()
    })
    writes.push(call);
  }

  await Promise.all(writes);

  res.sendStatus(201);
}

const store = admin.initializeApp().firestore();
export const run = utils.http.get(handleRequest);
