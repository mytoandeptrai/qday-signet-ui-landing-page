import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll } from "motion/react";
import { landing } from "@/content/landing";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import { AgentFlow } from "./agent-flow";

/** Diamond on the rail; fills once the timeline head (viewport middle) has passed it. */
function TimelineNode({ reduce }: { reduce: boolean }) {
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
}

export function Features() {
  const railRef = useRef<HTMLDivElement>(null);
  // The head of the fill tracks the middle of the viewport, from the first node to the last.
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 50%", "end 50%"] });
  const reduce = useReducedMotion();
  // Static end state for reduced motion; gated so the first client render matches the server.
  const showAll = useMounted() && reduce === true;
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-20">
      <div ref={railRef} className="relative flex flex-col gap-10 md:gap-24">
        {/* Timeline rail: a faint track with a brand fill that grows as you scroll. */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 top-[18px] hidden w-px bg-border md:block"
        >
          <motion.div
            className="h-full w-full origin-top bg-primary"
            style={{ scaleY: showAll ? 1 : scrollYProgress }}
          />
        </div>
        {landing.features.map((f, i) => (
          <article
            key={f.id}
            id={f.id}
            className="relative grid scroll-mt-24 grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2 md:gap-24"
          >
            <TimelineNode reduce={showAll} />
            <div className={cn(i % 2 === 1 && "md:order-2")}>
              <h2 className="font-display text-[31px] font-medium tracking-[-0.02em] text-foreground md:text-[39px]">
                {f.title}
              </h2>
              <p className="mt-3 max-w-[30rem] text-[17px] leading-[1.55] text-muted-foreground">
                {f.lead}
              </p>
              {f.id === "agents" && <AgentFlow />}
            </div>
            <ul className="self-start rounded-2xl border border-border bg-card p-6 md:p-8">
              {f.items.map((item, n) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : n * 0.08 }}
                  className="border-b border-divider py-3 text-[17px] text-foreground first:pt-0 last:border-b-0 last:pb-0"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
