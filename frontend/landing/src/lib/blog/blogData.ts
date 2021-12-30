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
};
authors as Record<string, AuthorDetails>;

export type BlogPost = {
  author: keyof typeof authors;
  title: string;
  description: string;
  date: Date;
  featured: boolean;
}

export const blogPosts: Record<string, BlogPost> = {
  "test-post": {
    author: "SteWaterman",
    title: "This is a test post",
    description: "I needed to test the blog post system, so I did.",
    date: new Date("2021-12-30T12:10:00Z"),
    featured: true
  }
}
