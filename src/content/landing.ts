/** All landing copy. Sample text: replace values here, components read only from this object. */

const HASH = "#";

export const landing = {
  meta: {
    title: "Signet: let your agents pay within the limits you set",
    description:
      "Signet gives AI agents a spending pass funded from your Trellis wallet. Set the budget, the per-payment cap and the duration. Revoke it whenever you want.",
    ogImage: "/og.png",
  },
  nav: {
    links: [
      { label: "Product", href: "#how-it-works" },
      { label: "Developers", href: "#developers" },
      { label: "Wallet", href: "#wallet" },
    ],
    cta: { label: "Get early access", href: HASH },
  },
  hero: {
    title: ["Let your agents pay.", "Within the limits you set."],
    sub: "Signet gives AI agents a spending pass funded from your Trellis wallet. You set the budget, the per-payment cap and how long it lasts. Revoke it whenever you want.",
    primaryCta: { label: "Get early access", href: HASH },
    secondaryCta: { label: "Read the docs", href: HASH },
  },
  ledger: {
    title: "Spending session",
    unit: "USD8",
    budget: { used: 42.1, total: 100 },
    endsIn: "6 days",
    /** Rows shown on load, newest first. */
    initial: [
      { agent: "research-agent", amount: 0.4, to: "api.example" },
      { agent: "research-agent", amount: 1.25, to: "data.example" },
      { agent: "research-agent", amount: 0.08, to: "search.example" },
    ],
    /** Rows that arrive over time, cycled. */
    incoming: [
      { agent: "research-agent", amount: 0.6, to: "maps.example" },
      { agent: "research-agent", amount: 0.15, to: "api.example" },
      { agent: "research-agent", amount: 2.1, to: "data.example" },
      { agent: "research-agent", amount: 0.32, to: "search.example" },
    ],
  },
  how: {
    id: "how-it-works",
    title: "How Signet works",
    body: "Three layers. Agents ask, SignetPass checks the rules, your wallet and QDay chain settle.",
    layers: [
      { id: "agents", label: "Agents", summary: "Ask to spend" },
      { id: "signetpass", label: "SignetPass", summary: "Checks the rules" },
      { id: "wallet", label: "Trellis wallet and QDay chain", summary: "Settle the payment" },
    ],
  },
  features: [
    {
      id: "agents",
      title: "Agents",
      lead: "Any terminal or framework can ask for a budget. None can spend without your approval.",
      items: [
        "Connect from the CLI or any agent framework",
        "Request a spending session",
        "Pay per call, within limits",
      ],
    },
    {
      id: "signetpass",
      title: "SignetPass",
      lead: "A spending account for agents. It enforces the limits you chose, on every payment.",
      items: [
        "Set budget, per-payment cap and duration",
        "Approve once, then agents spend on their own",
        "Lower limits any time",
        "End a session or revoke an agent",
        "See every payment in one history",
      ],
    },
    {
      id: "wallet",
      title: "Trellis wallet",
      lead: "Where the money and the authority live. You hold the keys.",
      items: [
        "Self-custody Trellis wallet",
        "Post-quantum protection mode",
        "Fees paid in USD8",
        "Settles on QDay chain",
      ],
    },
  ],
  cli: {
    id: "developers",
    title: "Start from the terminal",
    body: "Log in from your agent's CLI, approve the request in Trellis, and the session is live with the limits you picked.",
    lines: [
      { kind: "command", text: "signet login" },
      { kind: "note", text: "Waiting for approval in Trellis" },
      { kind: "result", text: "session active · 100 USD8 · 7 days" },
    ],
  },
  worksWith: {
    title: "Works with",
    names: [
      "Agentline",
      "Toolbench",
      "Relaykit",
      "Mercury CLI",
      "Pipeworks",
      "Callstack AI",
      "Fieldnote",
      "Orbit SDK",
    ],
  },
  cta: {
    title: "Give your first agent a budget.",
    action: { label: "Get early access", href: HASH },
  },
  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "How it works", href: "#how-it-works" },
          { label: "SignetPass", href: "#signetpass" },
          { label: "Trellis wallet", href: "#wallet" },
        ],
      },
      {
        title: "Developers",
        links: [
          { label: "Docs", href: HASH },
          { label: "CLI", href: "#developers" },
          { label: "GitHub", href: HASH },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Discord", href: HASH },
          { label: "GitHub", href: HASH },
        ],
      },
    ],
    legal: {
      text: "Sample text. Signet is a product preview; nothing on this page moves real funds.",
      links: [
        { label: "Terms", href: HASH },
        { label: "Privacy", href: HASH },
      ],
    },
  },
};

export type Landing = typeof landing;
