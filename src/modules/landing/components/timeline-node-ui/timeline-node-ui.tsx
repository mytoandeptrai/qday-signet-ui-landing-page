import { useRef } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

type TimelineNodeUiProps = {
  reduce: boolean;
};

/** Diamond on the rail; fills once the timeline head (viewport middle) has passed it. */
const TimelineNodeUi = ({ reduce }: TimelineNodeUiProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const passed = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });
  const lit = passed || reduce;
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn(
        "absolute left-1/2 top-3 hidden size-3 -translate-x-1/2 rotate-45 border transition-[background-color,border-color,transform] duration-300 md:block",
        lit ? "scale-125 border-primary bg-primary" : "border-border bg-background",
      )}
    />
  );
};

export default TimelineNodeUi;
