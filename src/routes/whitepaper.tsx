import { createFileRoute } from "@tanstack/react-router";
import { WhitepaperPage } from "@/components/pages/whitepaper-page";
import { pageHead } from "@/components/site/blocks";
import { whitepaper } from "@/content/pages/whitepaper";

export const Route = createFileRoute("/whitepaper")({
  head: () => pageHead(whitepaper.meta),
  component: WhitepaperPage,
});
