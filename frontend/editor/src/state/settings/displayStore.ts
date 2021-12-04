import { doc, DocumentReference } from "firebase/firestore";
import { getUserUid } from "../../api";
import { isDemo, isEmbeddedDemo } from "../../demo";
import { initableFirestoreWritable } from "../../utils/firestoreWritable";
import { getDb } from "../patch/db";

export type DisplayState = {
  fontSize: number;
  pageWidth: number;
}

const documentSupplier = () => doc(getDb(), "users", getUserUid(), "settings", "editorDisplay") as DocumentReference<DisplayState>;

const liveInitial: DisplayState = {
  fontSize: 12,
  pageWidth: 80
}

const demoInitial: DisplayState = {
  fontSize: 16,
  pageWidth: 80
}

const embeddedInitial: DisplayState = {
  fontSize: 16,
  pageWidth: 80
}

const initial = isEmbeddedDemo() ? embeddedInitial : isDemo() ? demoInitial : liveInitial;

export const displayStore = initableFirestoreWritable("Display Settings", documentSupplier, initial);
