import { AnimatePresence, motion } from "motion/react";
import { PageHero, Panel, Section } from "@/components/site-blocks";
import { formatDate } from "@/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { eventsPage, SignetEvent } from "@/content/pages/events";

type EventsUiProps = Pick<typeof eventsPage, "hero" | "tabs" | "empty" | "action"> & {
  status: SignetEvent["status"];
  shown: SignetEvent[];
  reduce: boolean | null;
  onStatusChange: (status: SignetEvent["status"]) => void;
};

const EventsUi = ({
  hero,
  tabs,
  empty,
  action,
  status,
  shown,
  reduce,
  onStatusChange,
}: EventsUiProps) => {
  return (
    <>
      <PageHero {...hero} />
      <Section className="py-6 md:py-8">
        <Tabs value={status} onValueChange={(v) => onStatusChange(v as SignetEvent["status"])}>
          <TabsList>
            <TabsTrigger value="upcoming">{tabs.upcoming}</TabsTrigger>
            <TabsTrigger value="past">{tabs.past}</TabsTrigger>
          </TabsList>
        </Tabs>
        {shown.length === 0 ? (
          <p className="mt-8 text-muted-foreground">{empty}</p>
        ) : (
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {shown.map((e) => (
                <motion.li
                  key={e.id}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: reduce ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Panel className="flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-muted-foreground">{formatDate(e.date)}</p>
                      <Badge variant="secondary">{e.type}</Badge>
                    </div>
                    <h2 className="mt-3 font-display text-[25px] font-medium text-foreground">
                      {e.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
                    <p className="mt-3 flex-1 text-[15px] leading-[1.55] text-muted-foreground">
                      {e.summary}
                    </p>
                    <Button asChild variant="outline" className="mt-5 self-start rounded-full">
                      <a href={e.href}>{action.label}</a>
                    </Button>
                  </Panel>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </Section>
    </>
  );
};

export default EventsUi;
