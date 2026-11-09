import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, Panel, Section, formatDate } from "@/components/site/blocks";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { blogPage, postTags, type Post } from "@/content/pages/blog";

export function BlogPage({ posts }: { posts: Post[] }) {
  const { hero, allLabel, pageSize, featuredLabel, empty } = blogPage;
  const [tag, setTag] = useState<string>(allLabel);
  const [page, setPage] = useState(1);
  const reduce = useReducedMotion();

  const filtered = tag === allLabel ? posts : posts.filter((p) => p.tag === tag);
  const featured = tag === allLabel && page === 1 ? filtered[0] : undefined;
  const rest = featured ? filtered.slice(1) : filtered;
  const pages = Math.max(1, Math.ceil(rest.length / pageSize));
  const current = Math.min(page, pages);
  const visible = rest.slice((current - 1) * pageSize, current * pageSize);
  const go = (n: number) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPage(Math.min(pages, Math.max(1, n)));
  };

  return (
    <PageShell>
      <PageHero {...hero} />
      <Section className="py-6 md:py-8">
        <ToggleGroup
          type="single"
          value={tag}
          onValueChange={(v) => {
            if (v) {
              setTag(v);
              setPage(1);
            }
          }}
          className="flex-wrap justify-start"
          aria-label="Filter posts by topic"
        >
          {[allLabel, ...postTags].map((t) => (
            <ToggleGroupItem key={t} value={t} className="rounded-full px-4">
              {t}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        {featured && (
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="mt-8 block">
            <Panel className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:gap-10 md:p-10">
              <div>
                <Badge>{featuredLabel}</Badge>
                <h2 className="mt-4 font-display text-[31px] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[39px]">
                  {featured.title}
                </h2>
              </div>
              <div className="self-end">
                <p className="text-[17px] leading-[1.55] text-muted-foreground">
                  {featured.excerpt}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {featured.tag} / {formatDate(featured.date)} / {featured.readMinutes} min
                </p>
              </div>
            </Panel>
          </Link>
        )}

        {visible.length === 0 && !featured ? (
          <p className="mt-8 text-muted-foreground">{empty}</p>
        ) : (
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p) => (
                <motion.li
                  key={p.slug}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: reduce ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="block h-full">
                    <Panel className="flex h-full flex-col">
                      <Badge variant="secondary" className="self-start">
                        {p.tag}
                      </Badge>
                      <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-2 flex-1 text-[15px] leading-[1.55] text-muted-foreground">
                        {p.excerpt}
                      </p>
                      <p className="mt-4 text-sm text-muted-foreground">
                        {formatDate(p.date)} / {p.readMinutes} min
                      </p>
                    </Panel>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}

        {pages > 1 && (
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={go(current - 1)} />
              </PaginationItem>
              {Array.from({ length: pages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink href="#" isActive={current === i + 1} onClick={go(i + 1)}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext href="#" onClick={go(current + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </Section>
    </PageShell>
  );
}
