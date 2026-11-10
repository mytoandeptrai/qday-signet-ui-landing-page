/** Blog copy and sample posts. Replace `posts` with a CMS fetch later; keep the Post shape. */

export const postTags = ["Product", "Engineering", "Company", "Podcast"] as const;
export type PostTag = (typeof postTags)[number];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (yyyy-mm-dd). */
  date: string;
  tag: PostTag;
  author: string;
  readMinutes: number;
  sections: { heading?: string; paragraphs: string[] }[];
};

const filler = [
  "This is sample text standing in for the real article. It is written to show line length, spacing and rhythm of a post, not to say anything about the product.",
  "Replace it by editing the post in this file, or by swapping the content layer for a CMS call. The page reads only the Post shape.",
];

export const blogPage = {
  meta: {
    title: "Blog | Signet",
    description: "Product notes, engineering write-ups and the Signet podcast.",
  },
  hero: {
    title: "Notes from the team.",
    lead: "What we shipped, how it works and what we learned. Podcast episodes live here too.",
  },
  allLabel: "All",
  pageSize: 6,
  featuredLabel: "Featured",
  empty: "No posts in this topic yet.",
  back: "All posts",
  notFound: { title: "Post not found", text: "That post does not exist or has moved." },
};

export const posts: Post[] = [
  {
    slug: "introducing-signetpass",
    title: "Introducing SignetPass",
    excerpt:
      "A spending pass for agents: a budget, a per-payment cap and an end date, all revocable.",
    date: "2026-10-30",
    tag: "Product",
    author: "John Tran",
    readMinutes: 5,
    sections: [
      { heading: "Why a pass", paragraphs: filler },
      { heading: "What you set", paragraphs: filler },
    ],
  },
  {
    slug: "revoking-in-two-seconds",
    title: "Revoking a pass in two seconds",
    excerpt: "How revocation propagates so an agent stops paying as soon as you say so.",
    date: "2026-10-21",
    tag: "Engineering",
    author: "Luca Bianchi",
    readMinutes: 8,
    sections: [
      { heading: "The problem", paragraphs: filler },
      { heading: "The approach", paragraphs: filler },
      { heading: "What is next", paragraphs: filler },
    ],
  },
  {
    slug: "podcast-agents-and-money",
    title: "Podcast: agents and money",
    excerpt: "A conversation about what it takes to let software spend on your behalf.",
    date: "2026-10-14",
    tag: "Podcast",
    author: "Amara Okafor",
    readMinutes: 32,
    sections: [{ paragraphs: filler }],
  },
  {
    slug: "trellis-wallet-update",
    title: "Trellis wallet: what changed this month",
    excerpt: "Clearer pass limits, a new activity view and a few small fixes.",
    date: "2026-10-07",
    tag: "Product",
    author: "Priya Nair",
    readMinutes: 4,
    sections: [{ heading: "Highlights", paragraphs: filler }],
  },
  {
    slug: "cli-first-agent",
    title: "Your first agent from the CLI",
    excerpt: "Issue a pass, hand it to a script and watch the receipts come in.",
    date: "2026-09-29",
    tag: "Engineering",
    author: "Jonas Weber",
    readMinutes: 6,
    sections: [
      { heading: "Install", paragraphs: filler },
      { heading: "Issue a pass", paragraphs: filler },
    ],
  },
  {
    slug: "hiring-2026",
    title: "We are hiring",
    excerpt: "Three roles across protocol, design and developer relations.",
    date: "2026-09-22",
    tag: "Company",
    author: "John Tran",
    readMinutes: 3,
    sections: [{ paragraphs: filler }],
  },
  {
    slug: "limits-that-make-sense",
    title: "Limits that make sense",
    excerpt: "Picking budgets and caps that match what an agent actually does.",
    date: "2026-09-15",
    tag: "Product",
    author: "Priya Nair",
    readMinutes: 5,
    sections: [{ heading: "Start small", paragraphs: filler }],
  },
  {
    slug: "podcast-security-review",
    title: "Podcast: reviewing a payments agent",
    excerpt: "Security researcher Kenji Sato walks through what he checks first.",
    date: "2026-09-08",
    tag: "Podcast",
    author: "Amara Okafor",
    readMinutes: 41,
    sections: [{ paragraphs: filler }],
  },
  {
    slug: "preview-recap",
    title: "Preview launch recap",
    excerpt: "What we showed, what people asked and what we are changing because of it.",
    date: "2026-09-20",
    tag: "Company",
    author: "John Tran",
    readMinutes: 4,
    sections: [{ paragraphs: filler }],
  },
];
