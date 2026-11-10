import { Cli } from "./cli";
import { Features } from "./feature-block";
import { Hero } from "./hero";
import { Layers } from "./layers";
import { Logos } from "./logos";
import { FooterContainer, NavContainer } from "@/modules/site-shell";

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <NavContainer />
      <main>
        <Hero />
        <Layers />
        <Features />
        <Cli />
        <Logos />
      </main>
      <FooterContainer />
    </div>
  );
}
