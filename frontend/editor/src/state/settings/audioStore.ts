import { doc, DocumentReference } from "firebase/firestore";
import { assertUser } from "../../api";
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

const documentSupplier: () => DocumentReference<AudioState> = () => doc(getDb(), "users", assertUser().uid, "settings", "editorAudio") as DocumentReference<AudioState>;
const initial: AudioState = {
  loop: false,
  volume: 100,
  rate: 100,
  mode: "context",
  autoPlay: true
}

export const audioStore = initableFirestoreWritable("Audio Settings", documentSupplier, initial);
