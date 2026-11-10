import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { landing } from "@/content/landing";

const { title, unit, budget, endsIn, initial, incoming } = landing.ledger;
const TICK_MS = 7000;
const MAX_ROWS = 3;

export type LedgerRow = { id: number; agent: string; amount: number; to: string };

/** True while the element is on screen and the tab is visible. */
function useActive(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) =>
      setInView(entries.some((e) => e.isIntersecting)),
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  useEffect(() => {
    const onChange = () => setTabVisible(document.visibilityState === "visible");
    onChange();
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);
  return inView && tabVisible;
}

export const useLedgerContainer = () => {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const active = useActive(containerRef);
  const [rows, setRows] = useState<LedgerRow[]>(() =>
    initial.map((r, i) => ({ ...r, id: -i - 1 })),
  );
  const [used, setUsed] = useState(budget.used);
  const next = useRef(0);

  useEffect(() => {
    if (!active || reduce !== false) return;
    const timer = setInterval(() => {
      const row = incoming[next.current % incoming.length];
      if (!row) return;
      const id = next.current++;
      setRows((r) => [{ ...row, id }, ...r].slice(0, MAX_ROWS));
      // Wrap back to the starting balance rather than overrunning the sample budget.
      setUsed((u) => (u + row.amount > budget.total ? budget.used : u + row.amount));
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [active, reduce]);

  return { containerRef, title, unit, budget, endsIn, rows, used, reduce };
};
