type User = {
  profile: UserProfile;
  transcriptions: Transcription[];
  secondsCredit: BigInteger;
}

type UserProfile = {
  name?: string;
  email: string;
  created: string;
}

type Transcription = {
  stage: "pre-upload" | "pre-transcode" | "pre-transcribe" | "pre-align" | "pre-adjust" | "ready";
  name: string;
  patches?: Patch[];
}

type Patch = {
  idx: number;
  timestamp: string;
  text?: string;
  endParagraph?: true;
}