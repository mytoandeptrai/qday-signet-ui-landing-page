import { useReducedMotion } from "motion/react";
import { useMounted } from "@/hooks/use-mounted";
import { DRAW_SECONDS } from "../utils";

export const useLatticeContainer = () => {
  const reduce = useReducedMotion();
  // Server and first client render must match, so anything that depends on the user's motion
  // preference waits until after mount. Reduced motion jumps to the end state instead of drawing.
  const mounted = useMounted();
  const animate = mounted && reduce === false;
  const duration = reduce ? 0 : DRAW_SECONDS;

  return { reduce, animate, duration };
};
