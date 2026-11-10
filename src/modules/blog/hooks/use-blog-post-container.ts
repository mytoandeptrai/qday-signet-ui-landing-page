import { getRouteApi } from "@tanstack/react-router";
import { blogPage } from "@/content/pages/blog";

const route = getRouteApi("/blog/$slug");

export const useBlogPostContainer = () => {
  const post = route.useLoaderData();
  return { post, back: blogPage.back };
};
