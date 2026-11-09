/**
 * Access layer for page data. Everything is async and returns plain data, so swapping the mock
 * modules for a CMS or API only changes this file; routes and components stay as they are.
 */
import { eventsPage, type SignetEvent } from "@/content/pages/events";
import { mediaPage, type MediaItem } from "@/content/pages/media";
import { posts, type Post } from "@/content/pages/blog";

const byDateDesc = <T extends { date: string }>(a: T, b: T) => b.date.localeCompare(a.date);

export async function getPosts(): Promise<Post[]> {
  return [...posts].sort(byDateDesc);
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return posts.find((p) => p.slug === slug);
}

export async function getEvents(): Promise<SignetEvent[]> {
  const all: SignetEvent[] = eventsPage.events;
  const upcoming = all
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = all.filter((e) => e.status === "past").sort(byDateDesc);
  return [...upcoming, ...past];
}

export async function getMedia(): Promise<MediaItem[]> {
  const all: MediaItem[] = mediaPage.items;
  return [...all].sort(byDateDesc);
}
