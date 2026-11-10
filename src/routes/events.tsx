import { createFileRoute } from "@tanstack/react-router";
import { EventsContainer } from "@/modules/events";
import { pageHead } from "@/utils";
import { eventsPage } from "@/content/pages/events";
import { getEvents } from "@/lib/content";

export const Route = createFileRoute("/events")({
  head: () => pageHead(eventsPage.meta),
  loader: () => getEvents(),
  component: EventsContainer,
});
