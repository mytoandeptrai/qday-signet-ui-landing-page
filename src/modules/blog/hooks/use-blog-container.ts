import { useState } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import { blogPage, postTags } from "@/content/pages/blog";

const route = getRouteApi("/blog/");

export const useBlogContainer = () => {
  const { hero, allLabel, pageSize, featuredLabel, empty } = blogPage;
  const posts = route.useLoaderData();
  const [tag, setTag] = useState<string>(allLabel);
  const [page, setPage] = useState(1);
  const reduce = useReducedMotion();

  const filtered = tag === allLabel ? posts : posts.filter((p) => p.tag === tag);
  const featured = tag === allLabel && page === 1 ? filtered[0] : undefined;
  const rest = featured ? filtered.slice(1) : filtered;
  const pages = Math.max(1, Math.ceil(rest.length / pageSize));
  const current = Math.min(page, pages);
  const visible = rest.slice((current - 1) * pageSize, current * pageSize);
  const tags = [allLabel, ...postTags];

  const onTagChange = (v: string) => {
    if (v) {
      setTag(v);
      setPage(1);
    }
  };
  const onPageChange = (n: number) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPage(Math.min(pages, Math.max(1, n)));
  };

  return {
    hero,
    featuredLabel,
    empty,
    tags,
    tag,
    featured,
    visible,
    pages,
    current,
    reduce,
    onTagChange,
    onPageChange,
  };
};
