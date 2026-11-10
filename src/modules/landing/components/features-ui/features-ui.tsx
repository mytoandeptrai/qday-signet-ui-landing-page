import type { ReactNode, RefObject } from "react";
import { motion, type MotionValue } from "motion/react";
import type { Landing } from "@/content/landing";
import FeatureStepUi from "../feature-step-ui";

type FeaturesUiProps = {
  features: Landing["features"];
  railRef: RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
  reduce: boolean | null;
  showAll: boolean;
  agentFlow: ReactNode;
};

const FeaturesUi = ({
  features,
  railRef,
  scrollYProgress,
  reduce,
  showAll,
  agentFlow,
}: FeaturesUiProps) => {
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
        {features.map((feature, index) => (
          <FeatureStepUi
            key={feature.id}
            feature={feature}
            index={index}
            reduce={reduce}
            showAll={showAll}
            agentFlow={feature.id === "agents" ? agentFlow : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesUi;
