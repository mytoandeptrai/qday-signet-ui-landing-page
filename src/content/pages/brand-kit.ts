/** Brand kit copy. Colour values mirror src/styles.css; update both together. */

export const brandKit = {
  meta: {
    title: "Brand kit | Signet",
    description: "Logos, colours and typography for Signet.",
  },
  hero: {
    title: "Brand kit.",
    lead: "Everything you need to refer to Signet in an article, a talk or a partner page.",
  },
  download: { label: "Download all assets", href: "#" },
  logos: {
    title: "Logo",
    lockup: { name: "Lockup", note: "Mark and name. Use this first." },
    mark: { name: "Mark", note: "For avatars and small spaces." },
    clearSpace:
      "Keep clear space around the logo equal to the height of the mark's centre diamond.",
    action: { label: "Download", href: "#" },
  },
  colors: {
    title: "Colour",
    items: [
      {
        name: "Brand",
        token: "--brand",
        light: "#06343a",
        dark: "#60f2ff",
        usage: "Actions and key moments",
      },
      {
        name: "Background",
        token: "--background",
        light: "#f4f7f8",
        dark: "#06343a",
        usage: "Page surface",
      },
      {
        name: "Foreground",
        token: "--foreground",
        light: "#06343a",
        dark: "#f4f7f8",
        usage: "Text",
      },
      {
        name: "Card",
        token: "--card",
        light: "#ffffff",
        dark: "#174248",
        usage: "Raised surfaces",
      },
      {
        name: "Muted text",
        token: "--muted-foreground",
        light: "#657376",
        dark: "#a6b3b5",
        usage: "Secondary text",
      },
      {
        name: "Border",
        token: "--border",
        light: "#d3dbdc",
        dark: "#335a60",
        usage: "Lines and outlines",
      },
    ],
  },
  type: {
    title: "Typography",
    items: [
      {
        name: "Inter Tight",
        weight: "Medium 500",
        usage: "Headlines",
        sample: "Let your agents pay.",
        className: "font-display font-medium",
      },
      {
        name: "Inter",
        weight: "Regular 400",
        usage: "Body text",
        sample: "Set the budget, the cap and the duration.",
        className: "font-sans",
      },
      {
        name: "JetBrains Mono",
        weight: "Regular 400",
        usage: "Amounts and commands only",
        sample: "signet pass issue --cap 5.00",
        className: "font-mono",
      },
    ],
  },
  rules: {
    title: "Using the logo",
    dos: [
      "Use the blue lockup on light backgrounds and the on-dark lockup on dark ones.",
      "Keep clear space on every side.",
      "Say Signet and SignetPass, spelled like that.",
    ],
    donts: [
      "Do not recolour, stretch or rotate the logo.",
      "Do not add shadows, outlines or effects.",
      "Do not imply an endorsement without agreement.",
    ],
    doTitle: "Do",
    dontTitle: "Do not",
  },
};
