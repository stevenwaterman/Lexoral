import { doc, DocumentReference } from "firebase/firestore";
import { assertUser } from "../api";
import { firestoreWritable, FirestoreWritable, FirestoreWritableField } from "../utils/firestoreWritable";
import { getDb } from "./patch/db";

export type DisplayState = {
  fontSize: number;
  pageWidth: number;
}

let initialised: boolean = false;

async function init() {
  if (initialised) throw new Error("Display store is already initialised");
  initialised = true;

  const document: DocumentReference<DisplayState> = doc(getDb(), "users", assertUser().uid, "settings", "editorDisplay") as DocumentReference<DisplayState>;
  const initial: DisplayState = {
    fontSize: 12,
    pageWidth: 80
  }
  
  const displayStore: FirestoreWritable<DisplayState> = await firestoreWritable<DisplayState>(document, initial);
  fontSizeStore = displayStore.field("fontSize");
  pageWidthStore = displayStore.field("pageWidth");
}

let fontSizeStore: FirestoreWritableField<DisplayState, "fontSize"> | undefined = undefined;
let pageWidthStore: FirestoreWritableField<DisplayState, "pageWidth"> | undefined = undefined;

function getFontSizeStore(): FirestoreWritableField<DisplayState, "fontSize"> {
  if (!initialised) throw new Error("Display store is not initialised");
  return fontSizeStore as FirestoreWritableField<DisplayState, "fontSize">;
}

function getPageWidthStore(): FirestoreWritableField<DisplayState, "fontSize"> {
  if (!initialised) throw new Error("Display store is not initialised");
  return pageWidthStore as FirestoreWritableField<DisplayState, "pageWidth">;
}

export const displayStore = {
  init,
  getFontSizeStore,
  getPageWidthStore
}
