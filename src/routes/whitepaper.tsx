import { createFileRoute } from "@tanstack/react-router";
import { WhitepaperContainer } from "@/modules/whitepaper";
import { pageHead } from "@/utils";
import { whitepaper } from "@/content/pages/whitepaper";

export const Route = createFileRoute("/whitepaper")({
  head: () => pageHead(whitepaper.meta),
  component: WhitepaperContainer,
});
