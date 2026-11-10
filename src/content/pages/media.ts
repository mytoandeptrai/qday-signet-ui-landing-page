/** Media page copy. Sample items; partner and outlet names are invented. */

export const mediaTypes = ["Press", "Video", "Podcast"] as const;
export type MediaType = (typeof mediaTypes)[number];

export type MediaItem = {
  id: string;
  type: MediaType;
  title: string;
  source: string;
  /** ISO date (yyyy-mm-dd). */
  date: string;
  summary: string;
  /** Press links out; video and podcast items open in a dialog. */
  href: string;
  duration?: string;
};

export const mediaPage = {
  meta: {
    title: "Media | Signet",
    description: "Press coverage, videos and podcast episodes about Signet.",
  },
  hero: {
    title: "Signet in the press.",
    lead: "Coverage, talks and episodes. Press enquiries go to the contact below.",
  },
  allLabel: "All",
  empty: "Nothing here yet.",
  player: {
    read: "Read",
    placeholder: "Sample player. The real embed goes here.",
    open: "Watch or listen",
  },
  contact: { title: "Press enquiries", text: "press@example.com (sample address)", href: "#" },
  items: [
    {
      id: "m1",
      type: "Press",
      title: "The startup giving AI agents a spending limit",
      source: "Ledger Weekly",
      date: "2026-10-26",
      summary: "A look at SignetPass and why budgets matter more than speed.",
      href: "#",
    },
    {
      id: "m2",
      type: "Video",
      title: "Demo: an agent pays inside its budget",
      source: "Signet",
      date: "2026-10-12",
      summary: "Four minutes from issuing a pass to a revoked one.",
      href: "#",
      duration: "4:12",
    },
    {
      id: "m3",
      type: "Podcast",
      title: "Agents and money, with John Tran",
      source: "Signet Podcast",
      date: "2026-10-14",
      summary: "What it takes to let software spend on your behalf.",
      href: "#",
      duration: "32:05",
    },
    {
      id: "m4",
      type: "Press",
      title: "Payment rails for machines",
      source: "Northwind Review",
      date: "2026-09-30",
      summary: "Signet is one of several teams rethinking how agents pay.",
      href: "#",
    },
    {
      id: "m5",
      type: "Video",
      title: "Keynote: money for machines",
      source: "Builders Summit",
      date: "2026-10-28",
      summary: "The case for limits, in twenty minutes.",
      href: "#",
      duration: "21:40",
    },
    {
      id: "m6",
      type: "Podcast",
      title: "Reviewing a payments agent",
      source: "Signet Podcast",
      date: "2026-09-08",
      summary: "Kenji Sato on what he checks first.",
      href: "#",
      duration: "41:18",
    },
  ] satisfies MediaItem[],
};
