/** Events page copy. Sample data. `status` is explicit so the page never depends on today's date. */

export type EventType = "Conference" | "Meetup" | "Webinar" | "Hackathon";

export type SignetEvent = {
  id: string;
  title: string;
  /** ISO date (yyyy-mm-dd). */
  date: string;
  location: string;
  type: EventType;
  status: "upcoming" | "past";
  summary: string;
  href: string;
};

export const eventsPage = {
  meta: {
    title: "Events | Signet",
    description: "Meetups, talks and hackathons from the Signet team and community.",
  },
  hero: {
    title: "Come say hello.",
    lead: "Talks, workshops and hackathons, in person and online.",
  },
  tabs: { upcoming: "Upcoming", past: "Past" },
  empty: "Nothing scheduled here yet.",
  action: { label: "Details", href: "#" },
  events: [
    {
      id: "agents-pay-berlin",
      title: "Agents Pay: Berlin meetup",
      date: "2026-12-04",
      location: "Berlin, Germany",
      type: "Meetup",
      status: "upcoming",
      summary: "Three short demos of agents spending inside a budget, then open questions.",
      href: "#",
    },
    {
      id: "passes-webinar",
      title: "Designing spending passes",
      date: "2026-12-11",
      location: "Online",
      type: "Webinar",
      status: "upcoming",
      summary: "How to pick budgets, per-payment caps and durations for different agents.",
      href: "#",
    },
    {
      id: "hack-agents",
      title: "Signet Agent Hackathon",
      date: "2027-01-23",
      location: "Singapore",
      type: "Hackathon",
      status: "upcoming",
      summary: "Two days to build an agent that pays for something useful. Sample prize pool.",
      href: "#",
    },
    {
      id: "keynote-fintech",
      title: "Keynote: money for machines",
      date: "2027-02-17",
      location: "London, UK",
      type: "Conference",
      status: "upcoming",
      summary: "Why agents need limits, and what a good limit looks like.",
      href: "#",
    },
    {
      id: "launch-party",
      title: "Preview launch night",
      date: "2026-09-18",
      location: "Hanoi, Vietnam",
      type: "Meetup",
      status: "past",
      summary: "The first public walk-through of SignetPass and the Trellis wallet.",
      href: "#",
    },
    {
      id: "cli-workshop",
      title: "CLI workshop",
      date: "2026-10-09",
      location: "Online",
      type: "Webinar",
      status: "past",
      summary: "Issue, inspect and revoke a pass from the terminal in forty minutes.",
      href: "#",
    },
    {
      id: "builders-summit",
      title: "Builders summit",
      date: "2026-10-28",
      location: "Lisbon, Portugal",
      type: "Conference",
      status: "past",
      summary: "A panel on agent payments with partners from the preview.",
      href: "#",
    },
  ] satisfies SignetEvent[],
};
