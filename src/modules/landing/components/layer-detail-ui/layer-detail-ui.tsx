import { AnimatePresence, motion } from "motion/react";
import type { Landing } from "@/content/landing";

type Layers = Landing["how"]["layers"];
type Features = Landing["features"];

type LayerDetailUiProps = {
  active: number;
  layers: Layers;
  features: Features;
};

const LayerDetailUi = ({ active, layers, features }: LayerDetailUiProps) => {
  const layer = layers[active];
  const feature = features.find((f) => f.id === layer?.id);
  if (!layer || !feature) return null;
  return (
    <div className="mt-10 min-h-[15rem] border-l-2 border-primary pl-6" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={layer.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="font-display text-xl text-foreground">{layer.label}</p>
          <ul className="mt-3 space-y-2 text-[17px] leading-[1.5] text-muted-foreground">
            {feature.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LayerDetailUi;
