import { createFileRoute } from "@tanstack/react-router";
import { CommunityContainer } from "@/modules/community";
import { pageHead } from "@/utils";
import { community } from "@/content/pages/community";

export const Route = createFileRoute("/community")({
  head: () => pageHead(community.meta),
  component: CommunityContainer,
});
