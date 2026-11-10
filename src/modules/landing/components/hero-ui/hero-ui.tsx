import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type { Landing } from "@/content/landing";

type HeroUiProps = {
  title: Landing["hero"]["title"];
  sub: Landing["hero"]["sub"];
  primaryCta: Landing["hero"]["primaryCta"];
  secondaryCta: Landing["hero"]["secondaryCta"];
  lattice: ReactNode;
  ledger: ReactNode;
};

const HeroUi = ({ title, sub, primaryCta, secondaryCta, lattice, ledger }: HeroUiProps) => {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      {lattice}
      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-[minmax(0,1fr)] gap-x-16 gap-y-8 px-4 py-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <h1 className="font-display text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[49px] lg:col-span-2 lg:text-[76px]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <div className="lg:self-start">
          <p className="max-w-[34rem] text-[17px] leading-[1.55] text-muted-foreground md:text-lg">
            {sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          </div>
        </div>
        {ledger}
      </div>
    </section>
  );
};

export default HeroUi;
