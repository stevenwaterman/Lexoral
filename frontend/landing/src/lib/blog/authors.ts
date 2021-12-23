

export type Authors = "SteWaterman";
export type AuthorDetails = {
  shortName: string;
  longName: string;
  job: string;
  bio: string;
};

const authors: Record<Authors, AuthorDetails> = {
  "SteWaterman": {
    shortName: "Steven",
    longName: "Steven Waterman",
    job: "Lexoral Founder",
    bio: "I founded Lexoral"
  }
};

export default authors;
