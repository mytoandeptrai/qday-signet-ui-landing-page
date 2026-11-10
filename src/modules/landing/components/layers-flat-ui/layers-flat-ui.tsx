import type { Landing } from "@/content/landing";
import LayerPlateUi from "../layer-plate-ui";
import LayersHeadingUi from "../layers-heading-ui";

type Layers = Landing["how"]["layers"];
type Features = Landing["features"];

type LayersFlatUiProps = {
  title: string;
  body: string;
  layers: Layers;
  features: Features;
};

const LayersFlatUi = ({ title, body, layers, features }: LayersFlatUiProps) => {
  return (
    <section
      data-layers="flat"
      className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-20 md:[@media(prefers-reduced-motion:no-preference)]:hidden"
    >
      <LayersHeadingUi title={title} body={body} />
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
                    <LayerPlateUi uid="flat" stroke="var(--brand)" />
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
};

export default LayersFlatUi;
