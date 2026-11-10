import { useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { scrollTop } from "@/content/nav";

const SHOW_AFTER = 480;

export const useScrollToTopContainer = () => {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > SHOW_AFTER));

  const onClick = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return { label: scrollTop.label, visible, onClick };
};
