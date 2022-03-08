import { doc, DocumentReference, serverTimestamp, writeBatch } from "firebase/firestore";
import { getTranscriptId, getUserUid } from "../../api";
import { sendToast } from "../../display/toast/toasts";
import { getDb } from "./db";
import type { Patch } from "./dbListener";

function getMetaDoc(): DocumentReference {
  return doc(getDb(), "users", getUserUid(), "transcripts", getTranscriptId(), "patches", "meta");
}

function getTranscriptDoc(): DocumentReference {
  return doc(getDb(), "users", getUserUid(), "transcripts", getTranscriptId());
}

export async function writePatchToFirestore(lastCommonAncestor: number, lastDbAncestor: number, newPatch: Patch | undefined): Promise<void> {
  const batch = writeBatch(getDb());

  const newCursor: number = lastCommonAncestor + (newPatch ? 1 : 0);

  const metaRef = getMetaDoc();
  batch.set(metaRef, { cursor: newCursor });

  const transcriptRef = getTranscriptDoc();
  batch.set(transcriptRef, { updated: serverTimestamp() }, { merge: true });

  if (newPatch) {
    const patchId = newCursor;
    const patchIdStr = patchId.toString().padStart(10, "0");
    const patchRef = doc(getDb(), "users", getUserUid(), "transcripts", getTranscriptId(), "patches", patchIdStr);
    batch.set(patchRef, newPatch);

    for (let i = newCursor + 1; i <= lastDbAncestor; i++) {
      const patchIdStr = i.toString().padStart(10, "0");
      const patchRef = doc(getDb(), "users", getUserUid(), "transcripts", getTranscriptId(), "patches", patchIdStr);
      batch.delete(patchRef);
    }
  }

  sendToast("Saving");
  await batch.commit();
}
