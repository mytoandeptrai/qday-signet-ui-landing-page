import type { ReactNode } from "react";
import { AnimationContainer } from "@/components/animation-container";

/** Page title block: H1 in Inter Tight 500, one lead sentence. */
function PageHero({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-8 pt-12 md:px-8 md:pb-14 md:pt-24">
      <AnimationContainer>
        <h1 className="max-w-[18ch] font-display text-[39px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground md:text-[61px]">
          {title}
        </h1>
      </AnimationContainer>
      <AnimationContainer delay={0.08}>
        <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.55] text-muted-foreground md:text-[19px]">
          {lead}
        </p>
      </AnimationContainer>
      {children && <AnimationContainer delay={0.16}>{children}</AnimationContainer>}
    </section>
  );
}

export default PageHero;
