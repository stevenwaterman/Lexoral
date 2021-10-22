import { doc, DocumentReference, writeBatch } from "firebase/firestore";
import { assertUser, getTranscriptId } from "../../api";
import { getDb } from "./db";
import type { Patch } from "./dbListener";

function getMetaDoc(): DocumentReference {
  return doc(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches", "meta");
}

export async function writePatchToFirestore(lastCommonAncestor: number, lastDbAncestor: number, newPatch: Patch | undefined): Promise<void> {
  const batch = writeBatch(getDb());

  const newCursor: number = lastCommonAncestor + (newPatch ? 1 : 0);

  const metaRef = getMetaDoc();
  batch.set(metaRef, { cursor: newCursor });
  // console.log("Setting firebase cursor", newCursor);

  if (newPatch) {
    const patchId = newCursor;
    const patchIdStr = patchId.toString().padStart(10, "0");
    const patchRef = doc(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches", patchIdStr);
    batch.set(patchRef, newPatch);
    // console.log("Setting firebase patch", patchId, newPatch);

    for (let i = newCursor + 1; i <= lastDbAncestor; i++) {
      const patchIdStr = i.toString().padStart(10, "0");
      const patchRef = doc(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches", patchIdStr);
      batch.delete(patchRef);
      // console.log("Deleting firebase patch", i);
    }
  }

  await batch.commit();
}
