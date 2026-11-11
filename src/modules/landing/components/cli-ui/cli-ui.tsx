import type { Landing } from "@/content/landing";
import { cn } from "@/lib/utils";

type CliUiProps = {
  id: Landing["cli"]["id"];
  title: Landing["cli"]["title"];
  body: Landing["cli"]["body"];
  lines: Landing["cli"]["lines"];
};

const CliUi = ({ id, title, body, lines }: CliUiProps) => {
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
          className="min-w-0 overflow-x-auto rounded-2xl bg-overlay p-6 font-mono text-sm leading-7 text-[#f4f7f8]"
        >
          {lines.map((l) => (
            <code key={l.text} className="block">
              <span
                className={cn(
                  l.kind === "command" ? "text-[#f4f7f8]" : "text-[#a6b3b5]",
                  l.kind === "result" && "text-[#60f2ff]",
                )}
              >
                {l.kind === "command" && <span className="text-[#60f2ff]">$ </span>}
                {l.text}
              </span>
            </code>
          ))}
        </pre>
      </div>
    </section>
  );
};

export default CliUi;
