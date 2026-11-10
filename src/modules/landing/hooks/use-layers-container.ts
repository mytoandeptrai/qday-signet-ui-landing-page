import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { landing } from "@/content/landing";
import { FALL_END, FAN_END, FANNED, PLATE_MID } from "../utils";

const { id, title, body, layers } = landing.how;
const { features } = landing;

export const useLayersContainer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const last = layers.length - 1;

  // Scroll progress is 0 in the server HTML and until motion has measured the page, so after a
  // reload mid-section the plates would show stacked for a few frames and then jump apart. Keep
  // the parts driven by progress hidden until it has had two frames to catch up, then fade in.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // The dot reaches each plate's midpoint at an even share of the fall.
    const t = (p - FAN_END) / (FALL_END - FAN_END);
    setActive(Math.min(last, Math.max(0, Math.round(t * last))));
  });

  const dotY = useTransform(
    scrollYProgress,
    [FAN_END, FALL_END],
    [PLATE_MID + (FANNED[0] ?? 0), PLATE_MID + (FANNED[last] ?? 0)],
  );
  const dotOpacity = useTransform(scrollYProgress, [FAN_END - 0.1, FAN_END], [0, 1]);
  const stageShift = useTransform(scrollYProgress, [0, 1], [0, -72]);

  return {
    id,
    title,
    body,
    layers,
    features,
    sectionRef,
    scrollYProgress,
    active,
    ready,
    dotY,
    dotOpacity,
    stageShift,
  };
};
