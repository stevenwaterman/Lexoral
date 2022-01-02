export type AuthorDetails = {
  shortName: string;
  longName: string;
  job: string;
  bio: string;
};

export const authors = {
  "SteWaterman": {
    shortName: "Steven",
    longName: "Steven Waterman",
    job: "Lexoral Founder",
    bio: "I founded Lexoral"
  }
} as const;
authors as Record<string, AuthorDetails>;

export type Author = keyof typeof authors;

export type BlogPost = {
  author: keyof typeof authors;
  title: string;
  shortDescription: string;
  longDescription: string;
  date: Date;
  featured: boolean;
  published: boolean;
}

export const blogPosts = {
  "why-open-source": {
    author: "SteWaterman",
    title: "Why Lexoral is Open Source",
    shortDescription: "You can read the code for Lexoral, and even suggest changes to it. Why would we do that?",
    longDescription: "I work full-time writing code for Lexoral, and then release all of that code for free online. How does that work, and why would I give away all that work for free? This post explores what it means for software to be open-source, why Lexoral is open-source, and whether your initial concerns are a real issue.",
    date: new Date("2021-12-30T12:10:00Z"),
    featured: true,
    published: true
  }
} as const;
blogPosts as Record<string, BlogPost>;

export type BlogId = keyof typeof blogPosts;