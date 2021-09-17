import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

type SignupEvent = { 
  uid: string;
  email: string;
  metadata: SignupMetadata
}

type SignupMetadata = { 
  creationTime: string;
}

type User = {
  id: string;
  profile: UserProfile;
  secondsCredit: string;
}

type UserProfile = {
  name?: string;
  email: string; // TODO necessary?
  created: string; // TODO necessary?
}


export async function run(event: SignupEvent) {
  initializeApp({
    apiKey: "AIzaSyBv7G95FIPXdpLE3Ft6aMJ2PHmt6ng28FM",
    authDomain: "lexoral-test.firebaseapp.com"
  });
  const db = getFirestore();
  const docRef = doc(db, "users", event.uid);
  const data: User = {
    id: event.uid,
    profile: {
      email: event.email,
      created: event.metadata.creationTime
    },
    secondsCredit: "0"
  }
  await setDoc(docRef, data);
  console.log("Added firestore document", docRef.path)
}
