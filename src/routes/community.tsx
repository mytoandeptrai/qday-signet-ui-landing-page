import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/components/pages/community-page";
import { pageHead } from "@/components/site/blocks";
import { community } from "@/content/pages/community";

export const Route = createFileRoute("/community")({
  head: () => pageHead(community.meta),
  component: CommunityPage,
});
