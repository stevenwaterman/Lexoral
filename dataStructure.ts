type User = {
  id: string;
  profile: UserProfile;
  transcriptions: Transcription[];
  secondsCredit: BigInteger;
}

type UserProfile = {
  name: string;
  email: string; // TODO necessary?
  created: Date; // TODO necessary?
}

type Transcription = {
  id: string;
  stage: "transcribe" | "align" | "adjust" | "edit";
  name: string;
  created: Date;
  lastUpdated: Date;
  patches: Patch[];
}

type Patch = {
  idx: number;
  timestamp: Date;
  text?: string;
  endParagraph?: true;
}