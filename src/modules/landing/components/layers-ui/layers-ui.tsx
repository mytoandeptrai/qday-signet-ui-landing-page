import type { RefObject } from "react";
import type { MotionValue } from "motion/react";
import type { Landing } from "@/content/landing";
import LayersFlatUi from "../layers-flat-ui";
import LayersPinnedUi from "../layers-pinned-ui";

type LayersUiProps = {
  id: string;
  title: string;
  body: string;
  layers: Landing["how"]["layers"];
  features: Landing["features"];
  sectionRef: RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  active: number;
  ready: boolean;
  dotY: MotionValue<number>;
  dotOpacity: MotionValue<number>;
  stageShift: MotionValue<number>;
};

/**
 * Both diagrams are in the HTML and CSS picks one (phones and reduced motion get the flat stack),
 * so the page has its final height before hydration. Swapping them in JS after mount resized the
 * page above everything below it and broke scroll restoration on reload.
 */
const LayersUi = ({ id, title, body, layers, features, ...pinned }: LayersUiProps) => {
  return (
    <div id={id}>
      <LayersFlatUi title={title} body={body} layers={layers} features={features} />
      <LayersPinnedUi title={title} body={body} layers={layers} features={features} {...pinned} />
    </div>
  );
};

export default LayersUi;
