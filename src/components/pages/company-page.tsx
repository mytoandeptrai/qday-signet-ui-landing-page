import { AnimationContainer } from "@/components/animation-container";
import { CountUp } from "@/components/count-up";
import { PageShell } from "@/components/site/page-shell";
import { Panel, PageHero, Section } from "@/components/site/blocks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { company } from "@/content/pages/company";

export function CompanyPage() {
  const { hero, stats, values, timeline, team, careers } = company;
  return (
    <PageShell>
      <PageHero {...hero} />
      <Section aria-label="Signet in numbers" className="py-6 md:py-8">
        <dl className="grid grid-cols-2 gap-6 border-y border-divider py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
              <dd className="font-display text-[39px] font-medium tracking-[-0.02em] text-foreground md:text-[49px]">
                <CountUp value={s.value} decimals={0} />
                {s.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section title="What we hold to" bare>
        <ul className="grid gap-4 md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title}>
              {" "}
              <AnimationContainer delay={i * 0.08} className="h-full">
                {" "}
                <Panel className="h-full">
                  <h3 className="font-display text-xl font-medium text-foreground">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">{v.text}</p>
                </Panel>{" "}
              </AnimationContainer>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </Section>{" "}
      <Section title="Where we are">
        <ol className="grid gap-6 border-l border-border pl-6 md:grid-cols-3 md:border-l-0 md:border-t md:pl-0 md:pt-6">
          {timeline.map((t) => (
            <li key={t.year}>
              <p className="text-sm text-primary">{t.year}</p>
              <h3 className="mt-1 font-display text-xl font-medium text-foreground">{t.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Team">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {team.map((m) => (
            <li key={m.name} className="flex items-center gap-4">
              <Avatar className="size-14">
                <AvatarFallback className="bg-secondary font-display text-lg text-secondary-foreground">
                  {m.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[17px] text-foreground">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="careers" title={careers.title} lead={careers.lead} className="scroll-mt-24">
        <Accordion type="single" collapsible className="border-t border-divider">
          {careers.roles.map((r) => (
            <AccordionItem key={r.id} value={r.id} className="border-divider">
              <AccordionTrigger className="py-5 text-left text-[17px] font-normal hover:no-underline">
                <span className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="text-foreground">{r.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {r.team} / {r.location}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="max-w-[34rem] text-[15px] leading-[1.55] text-muted-foreground">
                  {r.summary}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Badge variant="secondary">{r.type}</Badge>
                  <Button asChild size="sm">
                    <a href={careers.apply.href}>{careers.apply.label}</a>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </PageShell>
  );
}
