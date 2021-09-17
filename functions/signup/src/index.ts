import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

type SignupEvent = { 
  uid: string;
  email: string;
  metadata: SignupMetadata
}

type SignupMetadata = { 
  createdAt: string;
}

type User = {
  profile: UserProfile;
  secondsCredit: string;
}

type UserProfile = {
  name?: string;
  email: string; // TODO necessary?
  created: string; // TODO necessary?
}

export async function run(event: SignupEvent) {
  const email = event.email;
  const createdAt = event.metadata.createdAt;
  const data: User = {
    profile: {
      email: email,
      created: createdAt
    },
    secondsCredit: "0"
  }

  initializeApp({
    apiKey: "AIzaSyBv7G95FIPXdpLE3Ft6aMJ2PHmt6ng28FM",
    authDomain: "lexoral-test.firebaseapp.com",
    projectId: process.env["PROJECT_ID"]
  });
  const db = getFirestore();
  const docRef = doc(db, "users", event.uid);
  await setDoc(docRef, data);

  console.log("Added firestore document", docRef.path)
}
