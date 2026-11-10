import type { RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Landing } from "@/content/landing";
import type { LedgerRow } from "../../hooks";

const fmt = (n: number) => n.toFixed(2);

type LedgerUiProps = {
  containerRef: RefObject<HTMLDivElement | null>;
  title: Landing["ledger"]["title"];
  unit: Landing["ledger"]["unit"];
  budget: Landing["ledger"]["budget"];
  endsIn: Landing["ledger"]["endsIn"];
  rows: LedgerRow[];
  used: number;
  reduce: boolean | null;
};

const LedgerUi = ({
  containerRef,
  title,
  unit,
  budget,
  endsIn,
  rows,
  used,
  reduce,
}: LedgerUiProps) => {
  return (
    <div ref={containerRef} className="rounded-2xl border border-border bg-card p-5 md:p-6">
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
};

export default LedgerUi;
