import { landing } from "@/content/landing";

const { worksWith } = landing;

/** Invented wordmark: a small lattice glyph plus the name. Swap for real SVG logos later. */
function Wordmark({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap font-display text-xl font-medium text-muted-foreground">
      <svg
        viewBox="0 0 24 24"
        className="size-6"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L22 12L12 22L2 12Z M7 7L17 17 M17 7L7 17" />
      </svg>
      {name}
    </span>
  );
}

export function Logos() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-16">
      <p className="text-sm text-muted-foreground">{worksWith.title}</p>
      <div className="marquee mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track gap-x-12">
          {worksWith.names.map((n) => (
            <li key={n}>
              <Wordmark name={n} />
            </li>
          ))}
          {worksWith.names.map((n) => (
            <li key={`${n}-dup`} aria-hidden="true" className="marquee-dup">
              <Wordmark name={n} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
