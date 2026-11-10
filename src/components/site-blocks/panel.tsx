import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/** Flat bordered surface; hover only changes the border colour. */
function Panel({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40",
        className,
      )}
      {...props}
    />
  );
}

export default Panel;
