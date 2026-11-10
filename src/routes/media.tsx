import { createFileRoute } from "@tanstack/react-router";
import { MediaPage } from "@/components/pages/media-page";
import { pageHead } from "@/utils";
import { mediaPage } from "@/content/pages/media";
import { getMedia } from "@/lib/content";

export const Route = createFileRoute("/media")({
  head: () => pageHead(mediaPage.meta),
  loader: () => getMedia(),
  component: function Media() {
    return <MediaPage items={Route.useLoaderData()} />;
  },
});
