import { createFileRoute } from "@tanstack/react-router";
import { BlogContainer } from "@/modules/blog";
import { pageHead } from "@/utils";
import { blogPage } from "@/content/pages/blog";
import { getPosts } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => pageHead(blogPage.meta),
  loader: () => getPosts(),
  component: BlogContainer,
});
