import { useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { landing } from "@/content/landing";
import { aboutMenu } from "@/content/nav";

const { links, cta } = landing.nav;

export const useNavContainer = () => {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - (scrollY.getPrevious() ?? 0);
    setScrolled(y > 8);
    // Hide while reading downward, show on any upward scroll; small jitters change nothing.
    // Reduced motion only changes the background.
    if (reduce || y <= 160 || delta < -2) setHidden(false);
    else if (delta > 2) setHidden(true);
  });

  const onShow = () => setHidden(false);

  return { links, cta, aboutMenu, reduce, scrolled, hidden, onShow };
};
