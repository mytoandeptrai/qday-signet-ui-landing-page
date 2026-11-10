import { createFileRoute } from "@tanstack/react-router";
import { MediaContainer } from "@/modules/media";
import { pageHead } from "@/utils";
import { mediaPage } from "@/content/pages/media";
import { getMedia } from "@/lib/content";

export const Route = createFileRoute("/media")({
  head: () => pageHead(mediaPage.meta),
  loader: () => getMedia(),
  component: MediaContainer,
});
