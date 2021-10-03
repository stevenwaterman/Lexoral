import type { User } from "firebase/auth";
import type { Patch } from "./state/patchStore";
import type { SectionState } from "./state/sectionStore";

let user: User | undefined = undefined;

export function setUser(newUser: User) {
  user = newUser;
}

type FetchTranscriptResult = {
  transcript: Omit<SectionState, "idx">[];
  patches: Patch[];
  audioUrl: string;
}

export function assertUser(): User {
  if (user === undefined) throw new Error("User is undefined when calling authenticated api");
  return user;
}

export function getTranscriptId(): string {
  const params = new URLSearchParams(window.location.search);
  const transcriptId = params.get("id");
  if (transcriptId === null) throw new Error("Missing transcript ID");
  return transcriptId;
}

export async function fetchTranscript(): Promise<FetchTranscriptResult> {
  return assertUser()
    .getIdToken()
    .then(idToken =>
      fetch(`https://europe-west2-${process.env["PROJECT_ID"]}.cloudfunctions.net/fetch?transcript=${getTranscriptId()}`, {
        method: "get",
        headers: {
          "Authorization": `Bearer ${idToken}`
        }
      }))
    .then(res => {
      if (res.ok) return res;
      throw new Error("response was not OK: " + res.status)
    })
    .then(res => res.json())
}

export async function patchTranscript(patches: Record<number, Patch | null>): Promise<Response> {
  return assertUser()
    .getIdToken()
    .then(idToken => fetch(`https://europe-west2-${process.env["PROJECT_ID"]}.cloudfunctions.net/patch?transcript=${getTranscriptId()}`, {
      method: "put",
      headers: {
        "Authorization": `Bearer ${idToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patches)
    }))
    .then(res => {
      if (res.ok) return res;
      throw new Error("response was not OK: " + res.status)
    });
}