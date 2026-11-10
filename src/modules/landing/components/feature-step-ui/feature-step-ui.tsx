import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { Landing } from "@/content/landing";
import { cn } from "@/lib/utils";
import TimelineNodeUi from "../timeline-node-ui";

type FeatureStepUiProps = {
  feature: Landing["features"][number];
  index: number;
  reduce: boolean | null;
  showAll: boolean;
  agentFlow?: ReactNode;
};

const FeatureStepUi = ({ feature, index, reduce, showAll, agentFlow }: FeatureStepUiProps) => {
  return (
    <article
      id={feature.id}
      className="relative grid scroll-mt-24 grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2 md:gap-24"
    >
      <TimelineNodeUi reduce={showAll} />
      <div className={cn(index % 2 === 1 && "md:order-2")}>
        <h2 className="font-display text-[31px] font-medium tracking-[-0.02em] text-foreground md:text-[39px]">
          {feature.title}
        </h2>
        <p className="mt-3 max-w-[30rem] text-[17px] leading-[1.55] text-muted-foreground">
          {feature.lead}
        </p>
        {agentFlow}
      </div>
      <ul className="self-start rounded-2xl border border-border bg-card p-6 md:p-8">
        {feature.items.map((item, n) => (
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
  );
};

export default FeatureStepUi;
