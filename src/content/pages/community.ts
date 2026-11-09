/** Community page copy. Sample data. Links with no destination are "#". */

export const community = {
  meta: {
    title: "Community | Signet",
    description: "Join the builders working with Signet passes and agents.",
  },
  hero: {
    title: "Build with people who ship agents.",
    lead: "Ask questions, share what you made and shape what Signet does next.",
  },
  channels: [
    {
      name: "Discord",
      text: "Daily help from the team and other builders. Office hours every Thursday.",
      members: "Sample: 4.2k members",
      action: { label: "Join Discord", href: "#" },
    },
    {
      name: "GitHub",
      text: "SDKs, the CLI and examples. File issues, send patches.",
      members: "Sample: 310 contributors",
      action: { label: "Open GitHub", href: "#" },
    },
    {
      name: "X",
      text: "Release notes and short demos as they land.",
      members: "Sample: 12k followers",
      action: { label: "Follow", href: "#" },
    },
  ],
  programs: {
    title: "Programs",
    items: [
      {
        title: "Builder grants",
        text: "Small grants for agents, tools and integrations that use SignetPass.",
      },
      {
        title: "Ambassadors",
        text: "Host a meetup, write a guide, answer questions. We support the ones who do.",
      },
      {
        title: "Early access cohort",
        text: "Try new passes and limits before they ship and tell us what breaks.",
      },
    ],
  },
  ambassadors: {
    title: "Ambassadors",
    people: [
      { name: "Linh Pham", handle: "@linhbuilds", focus: "Agent tooling", initials: "LP" },
      {
        name: "Diego Alvarez",
        handle: "@diego_dev",
        focus: "Spanish-language guides",
        initials: "DA",
      },
      { name: "Fatima Khan", handle: "@fatima_k", focus: "Security reviews", initials: "FK" },
      { name: "Oskar Lindgren", handle: "@oskarl", focus: "Nordic meetups", initials: "OL" },
    ],
  },
};
