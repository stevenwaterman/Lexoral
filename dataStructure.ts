type User = {
  id: string;
  profile: UserProfile;
  transcriptions: Transcription[];
  secondsCredit: BigInteger;
}

type UserProfile = {
  name?: string;
  email: string; // TODO necessary?
  created: string; // TODO necessary?
}

type Transcription = {
  id: string;
  stage: "transcribe" | "align" | "adjust" | "edit";
  name: string;
  created: string;
  lastUpdated: string;
  patches: Patch[];
}

type Patch = {
  idx: number;
  timestamp: string;
  text?: string;
  endParagraph?: true;
}