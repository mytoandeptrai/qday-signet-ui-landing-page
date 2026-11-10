import { useState } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import { eventsPage, type SignetEvent } from "@/content/pages/events";

const route = getRouteApi("/events");

export const useEventsContainer = () => {
  const { hero, tabs, empty, action } = eventsPage;
  const events = route.useLoaderData();
  const [status, setStatus] = useState<SignetEvent["status"]>("upcoming");
  const reduce = useReducedMotion();
  const shown = events.filter((e) => e.status === status);

  return { hero, tabs, empty, action, status, shown, reduce, onStatusChange: setStatus };
};
