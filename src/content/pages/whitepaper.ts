/** Whitepaper page copy. Sample sections; versions model the Korean and MiCAR editions as a selector. */

type Version = { id: string; label: string; updated: string; pages: number; note: string };

const sample =
  "Sample text standing in for the whitepaper. Swap each section for the real chapter or load it from a document later.";

export const whitepaper = {
  meta: {
    title: "Whitepaper | Signet",
    description: "How Signet issues, scopes and revokes spending passes for AI agents.",
  },
  hero: {
    title: "The Signet whitepaper.",
    lead: "The protocol, the threat model and the reasoning behind passes.",
  },
  versionLabel: "Edition",
  versions: [
    { id: "en", label: "English", updated: "Oct 2026", pages: 28, note: "The main edition." },
    {
      id: "ko",
      label: "Korean",
      updated: "Sep 2026",
      pages: 30,
      note: "Translation of the main edition.",
    },
    {
      id: "micar",
      label: "MiCAR",
      updated: "Oct 2026",
      pages: 14,
      note: "Regulatory summary for the EU market (sample).",
    },
  ] as [Version, ...Version[]],
  download: { label: "Download PDF", href: "#" },
  tocLabel: "On this page",
  sections: [
    { id: "abstract", title: "Abstract", paragraphs: [sample, sample] },
    { id: "problem", title: "The problem", paragraphs: [sample, sample] },
    { id: "passes", title: "Spending passes", paragraphs: [sample, sample, sample] },
    { id: "settlement", title: "Settlement", paragraphs: [sample, sample] },
    { id: "security", title: "Security model", paragraphs: [sample, sample, sample] },
    { id: "roadmap", title: "Roadmap", paragraphs: [sample] },
  ],
};
