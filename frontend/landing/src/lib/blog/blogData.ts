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
  "open-source-punish": {
    author: "SteWaterman",
    title: "We're open-source to let you punish us",
    shortDescription: "Anyone can read the code for Lexoral and use it in their own projects. That means you can punish us.",
    longDescription: "Lexoral is Open-Source Software, which means that you can read the code and even use the code in your own projects. Open-Source has a lot of benefits, but there's one that you don't hear people talking about: it lets you punish us for not sticking to our promises.",
    date: new Date("2021-12-30T12:10:00Z"),
    featured: true,
    published: true
  }
} as const;
blogPosts as Record<string, BlogPost>;

export type BlogId = keyof typeof blogPosts;