import { getFirestore, Firestore, disableNetwork } from "firebase/firestore";
import { isDemo } from "../../api";

let db: Firestore | undefined = undefined;

export function getDb(): Firestore {
  if (db === undefined) {
    db = getFirestore();
    if (isDemo()) {
      disableNetwork(db);
    }
  }
  return db;
}
