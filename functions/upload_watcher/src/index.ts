import admin from "firebase-admin";
import utils from "lexoral-utils";

export async function run({ name }: { name: string }) {
  const [userId, transcriptId] = name.split("_");
  if (userId === undefined || transcriptId === undefined) throw new Error("File name formatted wrong: " + name);
  // TODO improve logging here
  // TODO call the workflow here
}

const store = admin.initializeApp().firestore();