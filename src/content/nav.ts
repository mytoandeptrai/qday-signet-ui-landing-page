/** Site-wide navigation for the About menu. Sample copy: components read only from here. */

export type NavItem = { label: string; description: string; href: string };
export type NavGroup = { title: string; items: NavItem[] };

export const aboutMenu: { label: string; groups: NavGroup[] } = {
  label: "About",
  groups: [
    {
      title: "Company",
      items: [
        {
          label: "Company",
          description: "Mission, team and open roles.",
          href: "/company",
        },
        {
          label: "Community",
          description: "Where builders talk shop.",
          href: "/community",
        },
        {
          label: "Events",
          description: "Meetups, talks and hackathons.",
          href: "/events",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", description: "Product notes and the Signet podcast.", href: "/blog" },
        { label: "Whitepaper", description: "The protocol in depth.", href: "/whitepaper" },
        { label: "Media", description: "Press, videos and episodes.", href: "/media" },
        { label: "Brand kit", description: "Logos, colours and type.", href: "/brand-kit" },
      ],
    },
  ],
};

export const scrollTop = { label: "Back to top" };
