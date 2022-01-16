export type AuthorDetails = {
	shortName: string;
	longName: string;
	job: string;
	bio: string;
	links: {
		email?: string;
		github?: string;
		twitter?: string;
		twitch?: string;
		linkedin?: string;
		website?: string;
	};
};

export const authors = {
	SteWaterman: {
		shortName: "Steven",
		longName: "Steven Waterman",
		job: "Lexoral Founder",
		bio: "I've spent my career building software to make people's lives easier, including Lexoral. It's my full-time job, and I'm always happy to chat with you - feel free to get in touch!",
		links: {
			email: "steven@lexoral.com",
			github: "StevenWaterman",
			twitter: "SteWaterman",
			twitch: "SteWaterman",
			linkedin: "steven-waterman",
			website: "www.stevenwaterman.uk"
		}
	}
} as const;
authors as Record<string, AuthorDetails>;

export type Author = keyof typeof authors;

export type BlogPost = {
	type: "org" | "tech" | "how-to";
	author: keyof typeof authors;
	title: string;
	shortDescription: string;
	longDescription: string;
	date: Date;
	featured: boolean;
	published: boolean;
	containHeader?: true;
};

export const blogPosts = {
	"open-source-punish": {
		type: "org",
		author: "SteWaterman",
		title: "Lexoral is open-source so you can punish us",
		shortDescription:
			"Anyone can read the code for Lexoral and use it in their own projects. That means you can punish us.",
		longDescription:
			"You can read the code for Lexoral, and even use it in your own projects. There's a lot of benefits to being open-source, but there's one that you don't hear people talking about: it lets you punish us for not sticking to our promises.",
		date: new Date("2022-01-04T12:10:00Z"),
		featured: true,
		published: true,
		containHeader: true
	},
	"svelte-firestore-binding": {
		type: "tech",
		author: "SteWaterman",
		title: "Firestore via Svelte store",
		shortDescription: "",
		longDescription: "",
		date: new Date(""),
		featured: true,
		published: true
	}
} as const;
blogPosts as Record<string, BlogPost>;

export type BlogId = keyof typeof blogPosts;

export type SnippetConfig = {
	name: string;
	language: "svelte" | "ts";
	snippet: string;
};
