import { landing } from "@/content/landing";
import { cn } from "@/lib/utils";

const { id, title, body, lines } = landing.cli;

export function Cli() {
  return (
    <section id={id} className="mx-auto max-w-[1200px] scroll-mt-16 px-4 py-12 md:px-8 md:py-20">
      <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 md:grid-cols-2 md:gap-24">
        <div>
          <h2 className="font-display text-[31px] font-medium tracking-[-0.02em] text-foreground md:text-[39px]">
            {title}
          </h2>
          <p className="mt-3 max-w-[30rem] text-[17px] leading-[1.55] text-muted-foreground">
            {body}
          </p>
        </div>
        {/* Always dark, like a terminal, in both themes. */}
        <pre
          aria-label="Terminal session"
          className="min-w-0 overflow-x-auto rounded-2xl bg-overlay p-6 font-mono text-sm leading-7 text-[#f5f7f9]"
        >
          {lines.map((l) => (
            <code key={l.text} className="block">
              <span
                className={cn(
                  l.kind === "command" ? "text-[#f5f7f9]" : "text-[#9ea3ad]",
                  l.kind === "result" && "text-[#8ecaed]",
                )}
              >
                {l.kind === "command" && <span className="text-[#6ea1ff]">$ </span>}
                {l.text}
              </span>
            </code>
          ))}
        </pre>
      </div>
    </section>
  );
}
