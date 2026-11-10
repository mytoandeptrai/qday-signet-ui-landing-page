import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { useMounted } from "@/hooks/use-mounted";

/** Runs only while on screen; reduced motion shows the resting diagram. */
export const useAgentFlowContainer = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef);
  const reduce = useReducedMotion();
  const run = useMounted() && inView && reduce === false;

  return { svgRef, run, reduce };
};
