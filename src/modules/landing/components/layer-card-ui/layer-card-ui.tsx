import { motion, useTransform, type MotionValue } from "motion/react";
import type { Landing } from "@/content/landing";
import { FAN_END, FANNED, STACKED } from "../../utils";
import LayerPlateUi from "../layer-plate-ui";

type LayerCardUiProps = {
  index: number;
  layer: Landing["how"]["layers"][number];
  active: boolean;
  progress: MotionValue<number>;
};

// useTransform maps the scroll progress it is handed to this plate's own position: animation
// presentation, so it stays with the plate rather than in the section hook.
const LayerCardUi = ({ index, layer: l, active, progress }: LayerCardUiProps) => {
  const y = useTransform(progress, [0.1, FAN_END], [STACKED[index] ?? 0, FANNED[index] ?? 0]);
  const labelOpacity = useTransform(progress, [0.45 + index * 0.05, 0.6 + index * 0.05], [0, 1]);
  const stroke = active ? "var(--brand)" : "var(--border)";
  return (
    <>
      <motion.g style={{ y }}>
        <svg x="60" width="400" height="200" viewBox="0 0 400 200">
          <LayerPlateUi uid="pinned" stroke={stroke} />
        </svg>
      </motion.g>
      <motion.g style={{ y, opacity: labelOpacity }}>
        <line x1="400" y1="100" x2="496" y2="100" stroke={active ? stroke : "var(--border)"} />
        <text
          x="508"
          y="92"
          fontSize="26"
          fontFamily="var(--font-display)"
          fill={active ? "var(--foreground)" : "var(--muted-foreground)"}
          style={{ transition: "fill 300ms" }}
        >
          {l.label}
        </text>
        <text x="508" y="124" fill="var(--muted-foreground)" fontSize="19">
          {l.summary}
        </text>
      </motion.g>
    </>
  );
};

export default LayerCardUi;
