import { createFileRoute } from "@tanstack/react-router";
import { EventsPage } from "@/components/pages/events-page";
import { pageHead } from "@/components/site/blocks";
import { eventsPage } from "@/content/pages/events";
import { getEvents } from "@/lib/content";

export const Route = createFileRoute("/events")({
  head: () => pageHead(eventsPage.meta),
  loader: () => getEvents(),
  component: function Events() {
    return <EventsPage events={Route.useLoaderData()} />;
  },
});
