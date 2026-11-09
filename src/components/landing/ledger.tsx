import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { landing } from "@/content/landing";

const { title, unit, budget, endsIn, initial, incoming } = landing.ledger;
const TICK_MS = 7000;
const MAX_ROWS = 3;

type Row = { id: number; agent: string; amount: number; to: string };

const fmt = (n: number) => n.toFixed(2);

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

export function Ledger() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const active = useActive(ref);
  const [rows, setRows] = useState<Row[]>(() => initial.map((r, i) => ({ ...r, id: -i - 1 })));
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

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="flex items-baseline justify-between">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">Ends in {endsIn}</p>
      </div>
      <p className="mt-3 font-mono text-2xl text-foreground" data-testid="ledger-budget">
        {fmt(used)}{" "}
        <span className="text-muted-foreground">
          / {fmt(budget.total)} {unit}
        </span>
      </p>
      <div
        role="progressbar"
        aria-label="Budget used"
        aria-valuemin={0}
        aria-valuemax={budget.total}
        aria-valuenow={Math.round(used)}
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-500"
          style={{ width: `${(used / budget.total) * 100}%` }}
        />
      </div>
      <ul
        className="mt-5 h-36 divide-y divide-divider overflow-hidden"
        aria-label="Recent payments"
      >
        <AnimatePresence initial={false}>
          {rows.map((r) => (
            <motion.li
              key={r.id}
              layout={reduce === false}
              initial={reduce === false ? { opacity: 0, y: -8 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-12 items-center justify-between gap-3 text-sm"
            >
              <span className="min-w-0 truncate text-foreground">
                <span className="font-mono">{r.agent}</span>{" "}
                <span className="text-muted-foreground">paid</span>{" "}
                <span className="font-mono">
                  {fmt(r.amount)} {unit}
                </span>{" "}
                <span className="text-muted-foreground">to {r.to}</span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5 text-accent">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                settled
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
