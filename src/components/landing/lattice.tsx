import { useMounted } from "@/hooks/use-mounted";
import { motion, useReducedMotion } from "motion/react";

/**
 * Hero lattice: a fine diagonal trellis with one payment route (wallet, SignetPass, agent) that
 * draws once on load, then rests with a single small pulse every 8s. Route vertices sit on lattice
 * crossings (multiples of 24 whose x+y is a multiple of 48).
 */
const ROUTE = "M120 552 L360 312 L504 456 L912 48";
const NODES = [
  { x: 120, y: 552, at: 0 },
  { x: 504, y: 456, at: 0.5 },
  { x: 912, y: 48, at: 1 },
];
const DRAW_SECONDS = 2.4;

export function Lattice() {
  const reduce = useReducedMotion();
  // Server and first client render must match, so anything that depends on the user's motion
  // preference waits until after mount. Reduced motion jumps to the end state instead of drawing.
  const mounted = useMounted();
  const animate = mounted && reduce === false;
  const duration = reduce ? 0 : DRAW_SECONDS;

  return (
    <svg
      aria-hidden="true"
      data-motion={animate ? "on" : "off"}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
    >
      <defs>
        <pattern id="lattice" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M0 0L48 48M48 0L0 48" stroke="var(--border)" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#lattice)" opacity="0.7" />
      <motion.path
        d={ROUTE}
        fill="none"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.45"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, ease: "easeInOut" }}
      />
      {NODES.map((n) => (
        <motion.circle
          key={n.x}
          cx={n.x}
          cy={n.y}
          r="6"
          fill="var(--background)"
          stroke="var(--brand)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // Start just before the route head arrives so the node is already there when it does.
          transition={{ delay: Math.max(0, n.at * duration - 0.3), duration: reduce ? 0 : 0.3 }}
        />
      ))}
      {animate && (
        <motion.path
          d={ROUTE}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: [0, 0.95], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.6,
            delay: DRAW_SECONDS + 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 8,
          }}
        />
      )}
    </svg>
  );
}
