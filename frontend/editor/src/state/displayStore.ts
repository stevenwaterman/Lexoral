import { doc, DocumentReference } from "firebase/firestore";
import { assertUser } from "../api";
import { firestoreWritable, FirestoreWritable, FirestoreWritableField } from "../utils/firestoreWritable";
import { getDb } from "./patch/db";

type DisplayState = {
  fontSize: number;
  pageWidth: number;
}

async function init() {
  const document: DocumentReference<DisplayState> = doc(getDb(), "users", assertUser().uid, "displaySettings") as DocumentReference<DisplayState>;
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

export async function getFontSizeStore(): Promise<FirestoreWritableField<DisplayState, "fontSize">> {
  if (fontSizeStore === undefined) await init();
  return fontSizeStore as FirestoreWritableField<DisplayState, "fontSize">;
}

export async function getPageWidthStore(): Promise<FirestoreWritableField<DisplayState, "pageWidth">> {
  if (pageWidthStore === undefined) await init();
  return pageWidthStore as FirestoreWritableField<DisplayState, "pageWidth">;
}
