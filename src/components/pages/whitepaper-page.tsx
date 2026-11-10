import { useEffect, useState } from "react";
import { AnimationContainer } from "@/components/animation-container";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, Section } from "@/components/site-blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { whitepaper } from "@/content/pages/whitepaper";
import { cn } from "@/lib/utils";

/** Id of the section nearest the top of the viewport, for the table of contents. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | undefined>(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const ids = whitepaper.sections.map((s) => s.id);

export function WhitepaperPage() {
  const { hero, versions, versionLabel, download, tocLabel, sections } = whitepaper;
  const [versionId, setVersionId] = useState(versions[0].id);
  const version = versions.find((v) => v.id === versionId) ?? versions[0];
  const active = useActiveSection(ids);
  return (
    <PageShell>
      <PageHero {...hero}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Select value={versionId} onValueChange={setVersionId}>
            <SelectTrigger aria-label={versionLabel} className="w-[180px] rounded-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {versions.map((v) => (
                <SelectItem key={v.id} value={v.id}>
                  {v.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button asChild className="rounded-full">
            <a href={download.href}>{download.label}</a>
          </Button>
          <Badge variant="secondary">
            {version.updated} / {version.pages} pp
          </Badge>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{version.note}</p>
      </PageHero>
      <Section bare>
        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
          <nav aria-label={tocLabel} className="md:sticky md:top-24 md:self-start">
            <p className="text-sm text-muted-foreground">{tocLabel}</p>
            <ul className="mt-3 space-y-1 border-l border-border">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active === s.id ? "location" : undefined}
                    className={cn(
                      "-ml-px block border-l py-1 pl-4 text-[15px] transition-colors",
                      active === s.id
                        ? "border-primary text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-w-[680px] space-y-14">
            {sections.map((s) => (
              <AnimationContainer key={s.id}>
                <section id={s.id} className="scroll-mt-24">
                  <h2 className="font-display text-[31px] font-medium tracking-[-0.02em] text-foreground">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {s.paragraphs.map((t, i) => (
                      <p key={i} className="text-[17px] leading-[1.7] text-muted-foreground">
                        {t}
                      </p>
                    ))}
                  </div>
                </section>
              </AnimationContainer>
            ))}{" "}
          </div>
        </div>{" "}
      </Section>
    </PageShell>
  );
}
