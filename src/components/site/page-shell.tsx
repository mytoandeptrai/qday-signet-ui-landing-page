import type { ReactNode } from "react";
import { Footer } from "@/components/landing/footer";
import { Nav } from "@/components/landing/nav";

/** Frame shared by every sub-page: nav,  footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
