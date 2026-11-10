import { AppLink } from "@/components/app-link";
import { SignetLockup } from "@/components/signet-lockup";
import { Button } from "@/components/ui/button";
import type { Landing } from "@/content/landing";

type FooterUiProps = {
  cta: Landing["cta"];
  footer: Landing["footer"];
};

const FooterUi = ({ cta, footer }: FooterUiProps) => {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-4 py-14 md:px-8 md:py-24">
        <h2 className="max-w-[18ch] font-display text-[39px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground md:text-[61px]">
          {cta.title}
        </h2>
        <Button asChild size="lg" className="mt-8 rounded-full">
          <a href={cta.action.href}>{cta.action.label}</a>
        </Button>
      </section>
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-10 md:py-14 md:grid-cols-[1.4fr_repeat(4,1fr)] md:px-8">
          <AppLink href="/" aria-label="Signet home">
            <SignetLockup />
          </AppLink>
          {footer.columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className="text-sm text-muted-foreground">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <AppLink
                      href={l.href}
                      className="text-[15px] text-foreground hover:text-primary"
                    >
                      {l.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 border-t border-divider px-4 py-6 text-sm text-muted-foreground md:flex-row md:justify-between md:px-8">
          <p>{footer.legal.text}</p>
          <ul className="flex gap-6">
            {footer.legal.links.map((l) => (
              <li key={l.label}>
                <AppLink href={l.href} className="hover:text-foreground">
                  {l.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default FooterUi;
