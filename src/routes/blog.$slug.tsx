import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostContainer } from "@/modules/blog";
import { pageHead } from "@/utils";
import { getPost } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData ? `${loaderData.title} | Signet` : "Signet",
      description: loaderData?.excerpt ?? "",
    }),
  component: BlogPostContainer,
});
