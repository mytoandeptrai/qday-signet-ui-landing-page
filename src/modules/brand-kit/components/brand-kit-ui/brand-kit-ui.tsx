import { AnimationContainer } from "@/components/animation-container";
import lockupDark from "@/assets/lockup-blue-on-dark.svg";
import lockupLight from "@/assets/lockup-blue.svg";
import { PageHero, Panel, Section } from "@/components/site-blocks";
import { Button } from "@/components/ui/button";
import type { brandKit } from "@/content/pages/brand-kit";

const markSrc = "/icon-blue.svg";

function LogoTile({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={
        dark
          ? "grid h-40 place-items-center rounded-xl bg-overlay"
          : "grid h-40 place-items-center rounded-xl border border-border bg-card"
      }
    >
      {children}
    </div>
  );
}

type BrandKitUiProps = Omit<typeof brandKit, "meta">;

const BrandKitUi = ({ hero, download, logos, colors, type, rules }: BrandKitUiProps) => {
  return (
    <>
      <PageHero {...hero}>
        <Button asChild className="mt-8 rounded-full">
          <a href={download.href}>{download.label}</a>
        </Button>
      </PageHero>
      <Section title={logos.title}>
        <ul className="grid gap-4 md:grid-cols-2">
          <li>
            <Panel>
              <div className="grid gap-3 sm:grid-cols-2">
                <LogoTile>
                  <img
                    src={lockupLight}
                    alt="Signet lockup, light background"
                    className="w-[150px]"
                  />
                </LogoTile>
                <LogoTile dark>
                  <img
                    src={lockupDark}
                    alt="Signet lockup, dark background"
                    className="w-[150px]"
                  />
                </LogoTile>
              </div>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                {logos.lockup.name}
              </h3>
              <p className="text-sm text-muted-foreground">{logos.lockup.note}</p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <a href={logos.action.href}>{logos.action.label}</a>
              </Button>
            </Panel>
          </li>
          <li>
            <Panel className="h-full">
              <div className="grid gap-3 sm:grid-cols-2">
                <LogoTile>
                  <img src={markSrc} alt="Signet mark" className="size-14" />
                </LogoTile>
                <LogoTile dark>
                  <img src={markSrc} alt="Signet mark on dark" className="size-14" />
                </LogoTile>
              </div>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                {logos.mark.name}
              </h3>
              <p className="text-sm text-muted-foreground">{logos.mark.note}</p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <a href={logos.action.href}>{logos.action.label}</a>
              </Button>
            </Panel>
          </li>
        </ul>
        <p className="mt-4 max-w-[34rem] text-sm text-muted-foreground">{logos.clearSpace}</p>
      </Section>
      <Section title={colors.title} bare>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colors.items.map((c, i) => (
            <li key={c.token}>
              {" "}
              <AnimationContainer delay={(i % 3) * 0.08}>
                {" "}
                <Panel className="p-4">
                  <div
                    className="h-20 rounded-lg border border-border"
                    style={{ background: `var(${c.token})` }}
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-[17px] text-foreground">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.usage}</p>
                  <p className="mt-2 font-mono text-sm text-muted-foreground">
                    {c.light} / {c.dark}
                  </p>
                </Panel>{" "}
              </AnimationContainer>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </Section>{" "}
      <Section title={type.title}>
        <ul className="divide-y divide-divider border-y border-divider">
          {type.items.map((t) => (
            <li key={t.name} className="grid gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-10">
              <div>
                <p className="text-[17px] text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.weight} / {t.usage}
                </p>
              </div>
              <p className={`${t.className} text-[25px] text-foreground md:text-[31px]`}>
                {t.sample}
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <Section title={rules.title}>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: rules.doTitle, items: rules.dos },
            { title: rules.dontTitle, items: rules.donts },
          ].map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-xl font-medium text-foreground">{g.title}</h3>
              <ul className="mt-3 space-y-2 border-t border-divider pt-3">
                {g.items.map((i) => (
                  <li key={i} className="text-[15px] leading-[1.55] text-muted-foreground">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default BrandKitUi;
