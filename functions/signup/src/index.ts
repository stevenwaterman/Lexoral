import admin from "firebase-admin";

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
  secondsCredit: number;
}

type UserProfile = {
  name?: string;
  email: string; // TODO necessary?
  created: string; // TODO necessary?
}

const store = admin.initializeApp().firestore();

export async function run(event: SignupEvent) {
  const email = event.email;
  const createdAt = event.metadata.createdAt;
  const data: User = {
    profile: {
      email: email,
      created: createdAt
    },
    secondsCredit: 0
  }

  const path = `users/${event.uid}`;
  await store.doc(path).set(data);
  
  console.log("Added firestore document", path);
}
