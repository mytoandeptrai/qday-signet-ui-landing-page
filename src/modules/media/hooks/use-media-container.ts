import { useState } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import { mediaPage, mediaTypes } from "@/content/pages/media";

const route = getRouteApi("/media");

export const useMediaContainer = () => {
  const { hero, allLabel, empty, contact, player } = mediaPage;
  const items = route.useLoaderData();
  const [type, setType] = useState<string>(allLabel);
  const reduce = useReducedMotion();
  const shown = type === allLabel ? items : items.filter((i) => i.type === type);
  const types = [allLabel, ...mediaTypes];
  const onTypeChange = (v: string) => v && setType(v);

  return { hero, empty, contact, player, type, types, shown, reduce, onTypeChange };
};
