import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useMounted } from "@/hooks/use-mounted";

const AGENT_X = 40;
const PASS_X = 240;
const WALLET_X = 440;
const CYCLE = 4.5;
const PACKETS = 3;

/**
 * Requests leave the agent, stop at the SignetPass gate, then pass on to the wallet once
 * approved. Runs only while on screen; reduced motion shows the resting diagram.
 */
export function AgentFlow() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const run = useMounted() && inView && reduce === false;

  return (
    <svg
      ref={ref}
      viewBox="0 0 480 150"
      role="img"
      aria-label="Agent requests pass through SignetPass to the wallet"
      className="mt-8 w-full max-w-[30rem]"
    >
      <line x1={AGENT_X} y1="60" x2={WALLET_X} y2="60" stroke="var(--border)" strokeWidth="2" />
      <line
        x1={AGENT_X}
        y1="60"
        x2={PASS_X}
        y2="60"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeDasharray="4 8"
        opacity="0.6"
      />
      <circle
        cx={AGENT_X}
        cy="60"
        r="14"
        fill="var(--card)"
        stroke="var(--foreground)"
        strokeWidth="2"
      />
      <rect
        x={PASS_X - 14}
        y="46"
        width="28"
        height="28"
        rx="4"
        transform={`rotate(45 ${PASS_X} 60)`}
        fill="var(--card)"
        stroke="var(--brand)"
        strokeWidth="2"
      />
      <circle
        cx={WALLET_X}
        cy="60"
        r="14"
        fill="var(--card)"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      {[
        ["agent", AGENT_X],
        ["SignetPass", PASS_X],
        ["wallet", WALLET_X],
      ].map(([label, x]) => (
        <text
          key={label}
          x={x}
          y="112"
          textAnchor="middle"
          fontSize="14"
          fill="var(--muted-foreground)"
        >
          {label}
        </text>
      ))}
      {Array.from({ length: PACKETS }, (_, i) => (
        <motion.circle
          key={i}
          r="5"
          cy="60"
          fill="var(--brand)"
          initial={{ cx: AGENT_X, opacity: 0 }}
          animate={
            run
              ? {
                  cx: [AGENT_X, PASS_X, PASS_X, WALLET_X],
                  opacity: [0, 1, 1, 0],
                }
              : { cx: AGENT_X + 60 + i * 60, opacity: reduce ? 1 : 0 }
          }
          transition={{
            duration: CYCLE,
            times: [0, 0.4, 0.55, 1],
            ease: "easeInOut",
            repeat: run ? Infinity : 0,
            delay: i * (CYCLE / PACKETS),
          }}
        />
      ))}
    </svg>
  );
}
