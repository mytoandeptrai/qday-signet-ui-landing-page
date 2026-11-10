import type { RefObject } from "react";
import { motion, type MotionValue } from "motion/react";
import type { Landing } from "@/content/landing";
import { cn } from "@/lib/utils";
import { CENTER_X } from "../../utils";
import LayerCardUi from "../layer-card-ui";
import LayerDetailUi from "../layer-detail-ui";
import LayersHeadingUi from "../layers-heading-ui";

type Layers = Landing["how"]["layers"];
type Features = Landing["features"];

type LayersPinnedUiProps = {
  title: string;
  body: string;
  layers: Layers;
  features: Features;
  sectionRef: RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  active: number;
  ready: boolean;
  dotY: MotionValue<number>;
  dotOpacity: MotionValue<number>;
  stageShift: MotionValue<number>;
};

const LayersPinnedUi = ({
  title,
  body,
  layers,
  features,
  sectionRef,
  scrollYProgress,
  active,
  ready,
  dotY,
  dotOpacity,
  stageShift,
}: LayersPinnedUiProps) => {
  const fade = cn("transition-opacity duration-300", ready ? "opacity-100" : "opacity-0");

  return (
    <section
      ref={sectionRef}
      data-layers="pinned"
      className="relative h-[250vh] max-md:hidden [@media(prefers-reduced-motion:reduce)]:hidden"
    >
      <div className="sticky top-0 flex h-dvh items-center overflow-hidden">
        {/* A lattice floor under the whole stage; it drifts slowly against the scroll. */}
        <motion.svg
          aria-hidden="true"
          style={{ y: stageShift }}
          className="absolute -inset-x-0 -top-20 h-[calc(100%+10rem)] w-full [mask-image:radial-gradient(ellipse_65%_60%_at_65%_50%,black,transparent)]"
        >
          <defs>
            <pattern id="pinned-stage-lattice" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M0 0L48 48M48 0L0 48" stroke="var(--border)" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pinned-stage-lattice)" />
        </motion.svg>
        <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-[minmax(0,1fr)] items-center gap-8 px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <LayersHeadingUi title={title} body={body} />
            <div className={fade}>
              <LayerDetailUi active={active} layers={layers} features={features} />
            </div>
          </div>
          <svg
            viewBox="0 0 900 680"
            className={cn("w-full", fade)}
            role="img"
            aria-label={layers.map((l) => l.label).join(", ")}
          >
            {layers.map((layer, i) => (
              <LayerCardUi
                key={layer.id}
                index={i}
                layer={layer}
                active={i === active}
                progress={scrollYProgress}
              />
            ))}
            <motion.circle
              cx={CENTER_X}
              cy={0}
              r="9"
              fill="var(--brand)"
              stroke="var(--background)"
              strokeWidth="3"
              style={{ y: dotY, opacity: dotOpacity }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default LayersPinnedUi;
