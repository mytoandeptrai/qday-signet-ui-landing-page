import { AnimationContainer } from "@/components/animation-container";
import { PageShell } from "@/components/site/page-shell";
import { Panel, PageHero, Section } from "@/components/site/blocks";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { community } from "@/content/pages/community";

export function CommunityPage() {
  const { hero, channels, programs, ambassadors } = community;
  return (
    <PageShell>
      <PageHero {...hero} />
      <Section bare className="py-6 md:py-8">
        <ul className="grid gap-4 md:grid-cols-3">
          {channels.map((c, i) => (
            <li key={c.name}>
              {" "}
              <AnimationContainer delay={i * 0.08} className="h-full">
                {" "}
                <Panel className="flex h-full flex-col">
                  <h2 className="font-display text-[25px] font-medium text-foreground">{c.name}</h2>
                  <p className="mt-2 flex-1 text-[15px] leading-[1.55] text-muted-foreground">
                    {c.text}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">{c.members}</p>
                  <Button asChild variant="outline" className="mt-4 self-start rounded-full">
                    <a href={c.action.href}>{c.action.label}</a>
                  </Button>
                </Panel>{" "}
              </AnimationContainer>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </Section>{" "}
      <Section title={programs.title} bare>
        <ul className="grid gap-8 md:grid-cols-3">
          {programs.items.map((p, i) => (
            <li key={p.title}>
              <AnimationContainer delay={i * 0.08} className="border-t border-border pt-4">
                <h3 className="font-display text-xl font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
                  {p.text}
                </p>{" "}
              </AnimationContainer>
            </li>
          ))}
        </ul>
      </Section>
      <Section title={ambassadors.title}>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {ambassadors.people.map((p) => (
            <li key={p.handle} className="flex flex-col gap-3">
              <Avatar className="size-16">
                <AvatarFallback className="bg-secondary font-display text-xl text-secondary-foreground">
                  {p.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[17px] text-foreground">{p.name}</p>
                <p className="font-mono text-sm text-muted-foreground">{p.handle}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.focus}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
