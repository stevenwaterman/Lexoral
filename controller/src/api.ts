import type { User } from "firebase/auth";
import { userStore } from "./auth/user";

let user: User | null = null;
userStore.subscribe(state => user = state);

function assertUser(): User {
  if (user === null) throw new Error("User is undefined when calling authenticated api");
  return user;
}

export async function uploadFile(file: File, name: string) {
  return assertUser().getIdToken()
    .then(idToken =>
      fetch("https://europe-west2-lexoral-test.cloudfunctions.net/upload", {
        method: "post",
        headers: {
          "Authorization": `Bearer ${idToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name
        })
      })
    ).then(async res => {
      if (res.ok) return res;
      const text = await res.text();
      throw new Error("Request was rejected: " + text);
    })
    .then(res => res.text())
    .then(url => fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/octet-stream"
      },
      body: file
    }))
}