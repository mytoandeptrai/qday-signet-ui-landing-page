import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/pages/blog-page";
import { pageHead } from "@/components/site/blocks";
import { blogPage } from "@/content/pages/blog";
import { getPosts } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => pageHead(blogPage.meta),
  loader: () => getPosts(),
  component: function Blog() {
    return <BlogPage posts={Route.useLoaderData()} />;
  },
});
