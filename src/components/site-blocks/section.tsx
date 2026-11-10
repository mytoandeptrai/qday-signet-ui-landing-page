import type { ComponentPropsWithoutRef } from "react";
import { AnimationContainer } from "@/components/animation-container";
import { cn } from "@/lib/utils";

/** Standard content band with an optional H2. */
function Section({
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

export default Section;
