import { doc, DocumentReference } from "firebase/firestore";
import { getUserUid } from "../../api";
import { initableFirestoreWritable } from "../../utils/firestoreWritable";
import { getDb } from "../patch/db";

export type AudioStyle = "context" | "onward"
export type AudioState = {
  loop: boolean;
  volume: number;
  rate: number;
  mode: AudioStyle;
  autoPlay: boolean;
}

const documentSupplier: () => DocumentReference<AudioState> = () => doc(getDb(), "users", getUserUid(), "settings", "editorAudio") as DocumentReference<AudioState>;
const initial: AudioState = {
  loop: false,
  volume: 100,
  rate: 100,
  mode: "onward",
  autoPlay: true
}

export const audioStore = initableFirestoreWritable("Audio Settings", documentSupplier, initial);
