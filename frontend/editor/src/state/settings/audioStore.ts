import { doc, DocumentReference } from "firebase/firestore";
import { getUserUid } from "../../api";
import { isDemo, isEmbeddedDemo } from "../../demo";
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
const liveInitial: AudioState = {
  loop: false,
  volume: 100,
  rate: 100,
  mode: "onward",
  autoPlay: true
}

const demoInitial: AudioState = {
  loop: false,
  volume: 100,
  rate: 100,
  mode: "onward",
  autoPlay: true
}

const embeddedInitial: AudioState = {
  loop: false,
  volume: 100,
  rate: 100,
  mode: "context",
  autoPlay: true
}

const initial = isEmbeddedDemo() ? embeddedInitial : isDemo() ? demoInitial : liveInitial;

export const audioStore = initableFirestoreWritable("Audio Settings", documentSupplier, initial);
