import { useRef } from "react";
import { useReducedMotion, useScroll } from "motion/react";
import { landing } from "@/content/landing";
import { useMounted } from "@/hooks/use-mounted";

const { features } = landing;

export const useFeaturesContainer = () => {
  const railRef = useRef<HTMLDivElement>(null);
  // The head of the fill tracks the middle of the viewport, from the first node to the last.
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 50%", "end 50%"] });
  const reduce = useReducedMotion();
  // Static end state for reduced motion; gated so the first client render matches the server.
  const showAll = useMounted() && reduce === true;

  return { features, railRef, scrollYProgress, reduce, showAll };
};
