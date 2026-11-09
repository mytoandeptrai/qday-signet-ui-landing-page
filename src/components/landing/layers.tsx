import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { landing } from "@/content/landing";

const { id, title, body, layers } = landing.how;
const { features } = landing;

/** One isometric plate of the lattice. Shared by the pinned and flat diagrams. */
function Plate({ uid, stroke = "var(--border)" }: { uid: string; stroke?: string }) {
  return (
    <>
      <defs>
        <pattern id={`${uid}-lattice`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 0L24 24M24 0L0 24" stroke="var(--border)" strokeWidth="1" fill="none" />
        </pattern>
        <clipPath id={`${uid}-clip`}>
          <path d="M200 0L400 100L200 200L0 100Z" />
        </clipPath>
      </defs>
      <path d="M200 0L400 100L200 200L0 100Z" fill="var(--card)" />
      <rect width="400" height="200" fill={`url(#${uid}-lattice)`} clipPath={`url(#${uid}-clip)`} />
      <path
        d="M200 0L400 100L200 200L0 100Z"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ transition: "stroke 300ms" }}
      />
    </>
  );
}

function Heading() {
  return (
    <div className="max-w-[1200px]">
      <h2 className="font-display text-[31px] font-medium tracking-[-0.02em] text-foreground md:text-[49px]">
        {title}
      </h2>
      <p className="mt-4 max-w-[34rem] text-[17px] leading-[1.55] text-muted-foreground md:text-lg">
        {body}
      </p>
    </div>
  );
}

/** Flat stack for phones and reduced motion: one card per layer, linked by the payment's path. */
function LayersFlat() {
  return (
    <section
      data-layers="flat"
      className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-20 md:[@media(prefers-reduced-motion:no-preference)]:hidden"
    >
      <Heading />
      <ol className="mt-8 flex flex-col md:mt-12">
        {layers.map((l, i) => {
          const feature = features.find((f) => f.id === l.id);
          return (
            <li key={l.id} className="flex flex-col items-center">
              {i > 0 && (
                <span aria-hidden="true" className="flex flex-col items-center">
                  <span className="h-5 w-px bg-primary/40" />
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="h-5 w-px bg-primary/40" />
                </span>
              )}
              <div className="w-full rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 400 200" className="w-20 shrink-0" aria-hidden="true">
                    <Plate uid="flat" stroke="var(--brand)" />
                  </svg>
                  <div className="min-w-0">
                    <p className="font-display text-xl leading-tight text-foreground">{l.label}</p>
                    <p className="text-muted-foreground">{l.summary}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 border-t border-divider pt-4 text-[15px] leading-[1.45] text-muted-foreground">
                  {feature?.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

// Vertical offsets (viewBox units) of each plate when stacked vs. fanned out, top layer first.
const STACKED = [220, 200, 180] as const;
const FANNED = [0, 240, 480] as const;
const CENTER_X = 260; // 60 (plate x) + 200 (half plate width)
const PLATE_MID = 100;
// The payment dot starts once the plates are fanned out, then falls through them.
const FAN_END = 0.6;
const FALL_END = 0.92;

function PinnedLayer({
  index,
  layer: l,
  active,
  progress,
}: {
  index: number;
  layer: (typeof layers)[number];
  active: boolean;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0.1, FAN_END], [STACKED[index] ?? 0, FANNED[index] ?? 0]);
  const labelOpacity = useTransform(progress, [0.45 + index * 0.05, 0.6 + index * 0.05], [0, 1]);
  const stroke = active ? "var(--brand)" : "var(--border)";
  return (
    <>
      <motion.g style={{ y }}>
        <svg x="60" width="400" height="200" viewBox="0 0 400 200">
          <Plate uid="pinned" stroke={stroke} />
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
}

/** Left column: what the layer the payment is passing through does. */
function LayerDetail({ active }: { active: number }) {
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
}

function LayersPinned() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const last = layers.length - 1;

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // The dot reaches each plate's midpoint at an even share of the fall.
    const t = (p - FAN_END) / (FALL_END - FAN_END);
    setActive(Math.min(last, Math.max(0, Math.round(t * last))));
  });

  const dotY = useTransform(
    scrollYProgress,
    [FAN_END, FALL_END],
    [PLATE_MID + (FANNED[0] ?? 0), PLATE_MID + (FANNED[last] ?? 0)],
  );
  const dotOpacity = useTransform(scrollYProgress, [FAN_END - 0.1, FAN_END], [0, 1]);
  const stageShift = useTransform(scrollYProgress, [0, 1], [0, -72]);

  return (
    <section
      ref={ref}
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
            <Heading />
            <LayerDetail active={active} />
          </div>
          <svg
            viewBox="0 0 900 680"
            className="w-full"
            role="img"
            aria-label={layers.map((l) => l.label).join(", ")}
          >
            {layers.map((layer, i) => (
              <PinnedLayer
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
}

/**
 * Both diagrams are in the HTML and CSS picks one (phones and reduced motion get the flat stack),
 * so the page has its final height before hydration. Swapping them in JS after mount resized the
 * page above everything below it and broke scroll restoration on reload.
 */
export function Layers() {
  return (
    <div id={id}>
      <LayersFlat />
      <LayersPinned />
    </div>
  );
}
