/** Company page copy. Sample data: replace values, keep the shape. */

export const company = {
  meta: {
    title: "Company | Signet",
    description: "The team and the thinking behind Signet, spending passes for AI agents.",
  },
  hero: {
    title: "Payments that agents can be trusted with.",
    lead: "Signet exists so that handing an agent a budget feels as safe as handing a colleague a company card with a limit.",
  },
  stats: [
    { label: "Sample agents on the testnet", value: 1280, suffix: "" },
    { label: "Sample passes issued", value: 5400, suffix: "" },
    { label: "Developer teams in preview", value: 62, suffix: "" },
    { label: "Median revoke time (seconds)", value: 2, suffix: "" },
  ],
  values: [
    {
      title: "Limits before speed",
      text: "Every payment is checked against a budget the owner set. Faster never means looser.",
    },
    {
      title: "Revocable by default",
      text: "A pass can be switched off at any moment, and the agent finds out immediately.",
    },
    {
      title: "Boring in the right places",
      text: "Plain receipts, readable limits, predictable failures. Surprises belong in demos, not in payments.",
    },
  ],
  timeline: [
    {
      year: "2025",
      title: "First prototype",
      text: "A single pass, a single agent and a hard-coded cap.",
    },
    {
      year: "2026",
      title: "Private preview",
      text: "Developer teams start issuing passes from the Trellis wallet.",
    },
    {
      year: "Next",
      title: "Open access",
      text: "Public docs, a stable CLI and a wider list of partners.",
    },
  ],
  team: [
    { name: "John Tran", role: "Co-founder, Product", initials: "MT" },
    { name: "Jonas Weber", role: "Co-founder, Engineering", initials: "JW" },
    { name: "Priya Nair", role: "Head of Design", initials: "PN" },
    { name: "Luca Bianchi", role: "Protocol engineer", initials: "LB" },
    { name: "Amara Okafor", role: "Developer relations", initials: "AO" },
    { name: "Kenji Sato", role: "Security", initials: "KS" },
  ],
  careers: {
    title: "Open roles",
    lead: "Sample listings. Swap in your real openings later.",
    roles: [
      {
        id: "protocol-engineer",
        title: "Protocol engineer",
        team: "Engineering",
        location: "Remote",
        type: "Full time",
        summary: "Design how passes are issued, scoped and revoked across chains.",
      },
      {
        id: "product-designer",
        title: "Product designer",
        team: "Design",
        location: "Remote",
        type: "Full time",
        summary: "Make limits and receipts understandable at a glance.",
      },
      {
        id: "devrel",
        title: "Developer advocate",
        team: "Community",
        location: "Hybrid",
        type: "Full time",
        summary: "Help teams ship their first agent that pays.",
      },
    ],
    apply: { label: "Apply", href: "#" },
  },
};
