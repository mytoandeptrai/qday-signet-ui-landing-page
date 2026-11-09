import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, Panel, Section, formatDate } from "@/components/site/blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { mediaPage, mediaTypes, type MediaItem } from "@/content/pages/media";

function Action({ item }: { item: MediaItem }) {
  if (item.type === "Press") {
    return (
      <Button asChild variant="outline" className="mt-5 self-start rounded-full">
        <a href={item.href}>{mediaPage.player.read}</a>
      </Button>
    );
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-5 self-start rounded-full">
          {mediaPage.player.open}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{item.title}</DialogTitle>
        <DialogDescription>
          {item.source} / {item.duration}
        </DialogDescription>
        <div className="grid aspect-video place-items-center rounded-xl border border-border bg-secondary px-6 text-center text-sm text-muted-foreground">
          {mediaPage.player.placeholder}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function MediaPage({ items }: { items: MediaItem[] }) {
  const { hero, allLabel, empty, contact } = mediaPage;
  const [type, setType] = useState<string>(allLabel);
  const reduce = useReducedMotion();
  const shown = type === allLabel ? items : items.filter((i) => i.type === type);
  return (
    <PageShell>
      <PageHero {...hero} />
      <Section className="py-6 md:py-8">
        <ToggleGroup
          type="single"
          value={type}
          onValueChange={(v) => v && setType(v)}
          className="flex-wrap justify-start"
          aria-label="Filter by type"
        >
          {[allLabel, ...mediaTypes].map((t) => (
            <ToggleGroupItem key={t} value={t} className="rounded-full px-4">
              {t}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        {shown.length === 0 ? (
          <p className="mt-8 text-muted-foreground">{empty}</p>
        ) : (
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {shown.map((i) => (
                <motion.li
                  key={i.id}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: reduce ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Panel className="flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{i.type}</Badge>
                      {i.duration && (
                        <span className="font-mono text-sm text-muted-foreground">
                          {i.duration}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-4 font-display text-xl font-medium text-foreground">
                      {i.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {i.source} / {formatDate(i.date)}
                    </p>
                    <p className="mt-3 flex-1 text-[15px] leading-[1.55] text-muted-foreground">
                      {i.summary}
                    </p>
                    <Action item={i} />
                  </Panel>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </Section>
      <Section className="py-6 md:py-10">
        <div className="border-t border-divider pt-6">
          <h2 className="font-display text-xl font-medium text-foreground">{contact.title}</h2>
          <a
            href={contact.href}
            className="mt-1 block text-[15px] text-muted-foreground hover:text-primary"
          >
            {contact.text}
          </a>
        </div>
      </Section>
    </PageShell>
  );
}
