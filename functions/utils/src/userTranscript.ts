import { Request, Response } from "express";
import { Firestore, DocumentReference, DocumentSnapshot } from "@google-cloud/firestore";
import { respondError } from "./internal/respond.js";
import { check } from "./auth.js";

export type UserTranscriptIds = {
  userId: string;
  transcriptId: string;
};

export type UserTranscriptDocs = {
  userDoc: DocumentReference;
  transcriptDoc: DocumentReference;
}

export type UserTranscriptData = {
  user: DocumentSnapshot;
  transcript: DocumentSnapshot;
}

export type UserTranscriptFull = {
  user: {
    id: string;
    doc: DocumentReference;
    data: DocumentSnapshot;
  };
  transcript: {
    id: string;
    doc: DocumentReference;
    data: DocumentSnapshot;
  };
}

export function getIds(req: Request, res: Response): UserTranscriptIds  {
  const query: Record<string, string> = req.query as any;
  
  const userId = query["user"];
  if (!userId) throw respondError(res, 400, "user query param missing");

  const transcriptId = query["transcript"];
  if (!transcriptId) throw respondError(res, 400, "transcript query param missing");

  return { userId, transcriptId };
}

export function getDocs(ids: UserTranscriptIds, store: Firestore): UserTranscriptDocs {
  const { userId, transcriptId } = ids;
  const userDoc = store.doc(`users/${userId}`);
  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  return { userDoc, transcriptDoc };
}

export async function getData(utDocs: UserTranscriptDocs, res: Response): Promise<UserTranscriptData> {
  const { userDoc, transcriptDoc } = utDocs;
  const [user, transcript] = await Promise.all([userDoc.get(), transcriptDoc.get()]);
  if (!user.exists) throw respondError(res, 404, `User: ${userDoc.path} doc missing`)
  if (!transcript.exists) throw respondError(res, 404, `Transcript ${transcriptDoc.path} doc missing`);
  return { user, transcript };
}

export async function getAll(req: Request, res: Response, store: Firestore): Promise<UserTranscriptFull> {
  const ids = getIds(req, res);
  const docs = getDocs(ids, store);
  const data = await getData(docs, res);
  return {
    user: {
      id: ids.userId,
      doc: docs.userDoc,
      data: data.user
    },
    transcript: {
      id: ids.transcriptId,
      doc: docs.transcriptDoc,
      data: data.transcript
    }
  }
}

export async function getIdsAuth(req: Request, res: Response): Promise<UserTranscriptIds>  {
  const query: Record<string, string> = req.query as any;
  
  const token = await check(req, res);
  const userId = token.uid;

  const transcriptId = query["transcript"];
  if (!transcriptId) throw respondError(res, 400, "transcript query param missing");

  return { userId, transcriptId };
}

export async function getAllAuth(req: Request, res: Response, store: Firestore): Promise<UserTranscriptFull> {
  const ids = await getIdsAuth(req, res);
  const docs = getDocs(ids, store);
  const data = await getData(docs, res);
  return {
    user: {
      id: ids.userId,
      doc: docs.userDoc,
      data: data.user
    },
    transcript: {
      id: ids.transcriptId,
      doc: docs.transcriptDoc,
      data: data.transcript
    }
  }
}
