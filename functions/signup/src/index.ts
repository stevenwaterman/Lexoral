import { initializeApp, firestore } from "firebase-admin";

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

  initializeApp();
  const db = firestore();
  const path = `users/${event.uid}`;
  await db.doc(path).set(data)
  console.log("Added firestore document", path)
}
