export type AuthorDetails = {
	shortName: string;
	longName: string;
	job: string;
	bio: string;
	links: {
		email?: string;
    calendly?: string;
		github?: string;
		twitter?: string;
		twitch?: string;
		linkedin?: string;
		website?: string;
	};
};

const assertAuthors = <T extends Record<string, AuthorDetails>>(authors: T) => authors;
export const authors = assertAuthors({
	SteWaterman: {
		shortName: "Steven",
		longName: "Steven Waterman",
		job: "Lexoral Founder",
		bio: "I've spent my career building software to make people's lives easier, including Lexoral. It's my full-time job, and I'm always happy to chat with you - feel free to get in touch!",
		links: {
			email: "steven@lexoral.com",
      calendly: "lexoral/office-hours",
			github: "StevenWaterman",
			twitter: "SteWaterman",
			twitch: "Lexoral",
			linkedin: "steven-waterman",
			website: "www.stevenwaterman.uk"
		}
	}
} as const);

export type Author = keyof typeof authors;

export type BlogPost = {
	type: "org" | "tech" | "how-to";
	author: keyof typeof authors;
	title: string;
  stylisedTitle?: string;
	shortDescription: string;
	longDescription: string;
	date: Date;
	featured: boolean;
	published: boolean;
	header?: {
    position?: "bottom" | "center" | "top" | "left" | "right";
    fit?: "contain" | "cover" | "fill";
  };
};

const assertBlogPosts = <T extends Record<string, BlogPost>>(posts: T) => posts;
export const blogPosts = assertBlogPosts({
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
		header: {
      fit: "contain"
    }
	},
	"svelte-firestore-binding": {
		type: "tech",
		author: "SteWaterman",
		title: "Database sync like magic, with Svelte + Firestore",
		shortDescription:
			"Svelte and Firestore are a match made in heaven, making it easy to sync data between the browser and the database.",
		longDescription:
			"Both Firestore and Svelte are event-driven and reactive. By forgetting everything we know about data layers and building one from first principles, we've made it easy to synchronise data both ways between the browser and the database.",
		date: new Date("2022-02-16T18:30:00Z"),
		featured: true,
		published: true,
    header: {
      position: "bottom"
    }
	},
  "you-dont-need-js": {
		type: "tech",
		author: "SteWaterman",
		title: "5 things you don't need Javascript for",
		shortDescription:
			"Javascript can do a lot, but it's really over-used. Here's my top 5 things you don't need Javascript for.",
		longDescription:
			"Javascript can do a lot, but it's really over-used. HTML and CSS are surprisingly powerful on their own, so let's have a look at some of the things you can achieve without Javascript (or a backend) - from animated diagrams to dark mode.",
		date: new Date("2022-02-28T12:00:00Z"),
		featured: true,
		published: true,
    header: {
      position: "center"
    }
	},
  "speaking-with-confidence": {
    type: "how-to",
    author: "SteWaterman",
    title: "You can learn to Speak Confidently",
    shortDescription: "Do the words 'public speaking' strike fear into your heart? I used to be the same. Used to.",
    longDescription: "Do the words 'public speaking' strike fear into your heart? It doesn't come naturally to me either, but over time I've slowly improved. This post is all about the things that helped me, so you can learn too.",
    date: new Date("2022-04-04T12:30:00Z"),
    featured: true,
    published: true,
    header: {
      position: "top",
      fit: "cover"
    }
  },
  "office-hours": {
    type: "org",
    author: "SteWaterman",
    title: "We Need to Talk (if you want)",
    stylisedTitle: "We Need to Talk <span style='font-size:0.5em;white-space:nowrap;'>(if you want)</span>",
    shortDescription: "I've always been open to chat with people, but now it's official. You can book a slot in my diary to chat about anything.",
    longDescription: "I've always been available to chat, but now I've taken it a step further. Anyone can book time in my diary to chat about anything - even if you just want my advice. Why did I decide to do that? Let's talk about it.",
    date: new Date("2022-04-08T18:00:00Z"),
    featured: true,
    published: true,
    header: {
      position: "top",
      fit: "cover"
    }
  }
} as const);

export type BlogId = keyof typeof blogPosts;

export type SnippetConfig = {
	name: string;
	language: "svelte" | "ts";
	snippet: string;
};
