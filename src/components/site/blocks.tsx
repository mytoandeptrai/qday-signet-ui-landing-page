import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { AnimationContainer } from "@/components/animation-container";
import { cn } from "@/lib/utils";

/** Page title block: H1 in Inter Tight 500, one lead sentence. */
export function PageHero({
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

/** Standard content band with an optional H2. */
export function Section({
  title,
  lead,
  bare,
  className,
  children,
  ...props
}: {
  title?: string;
  lead?: string;
  /** Skip the fade on the body, for lists whose items animate on their own. */
  bare?: boolean;
} & ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn("mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-16", className)}
      {...props}
    >
      {(title || lead) && (
        <AnimationContainer>
          {title && (
            <h2 className="font-display text-[31px] font-medium tracking-[-0.02em] text-foreground md:text-[39px]">
              {title}
            </h2>
          )}
          {lead && (
            <p className="mt-3 max-w-[34rem] text-[17px] leading-[1.55] text-muted-foreground">
              {lead}
            </p>
          )}
        </AnimationContainer>
      )}
      {bare ? (
        <div className={cn(title && "mt-8 md:mt-10")}>{children}</div>
      ) : (
        <AnimationContainer className={cn(title && "mt-8 md:mt-10")}>{children}</AnimationContainer>
      )}
    </section>
  );
}

/** Flat bordered surface; hover only changes the border colour. */
export function Panel({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40",
        className,
      )}
      {...props}
    />
  );
}

/** Readable date from an ISO yyyy-mm-dd string, same in every timezone. */
export function formatDate(iso: string) {
  const [y = 1970, m = 1, d = 1] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

/** Route head() meta for a page, same shape as the landing route. */
export function pageHead({ title, description }: { title: string; description: string }) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  };
}
