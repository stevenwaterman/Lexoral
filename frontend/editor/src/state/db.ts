import { getFirestore, Firestore } from "firebase/firestore";

let db: Firestore | undefined = undefined;

export function getDb(): Firestore {
  if (db === undefined) db = getFirestore();
  return db;
}
