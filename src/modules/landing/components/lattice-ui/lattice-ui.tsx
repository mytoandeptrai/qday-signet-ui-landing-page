import { motion } from "motion/react";
import { DRAW_SECONDS, NODES, ROUTE } from "../../utils";

type LatticeUiProps = {
  animate: boolean;
  reduce: boolean | null;
  duration: number;
};

const LatticeUi = ({ animate, reduce, duration }: LatticeUiProps) => {
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
};

export default LatticeUi;
