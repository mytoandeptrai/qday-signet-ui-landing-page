import { Cli } from "./cli";
import { Features } from "./feature-block";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Layers } from "./layers";
import { Logos } from "./logos";
import { Nav } from "./nav";

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Layers />
        <Features />
        <Cli />
        <Logos />
      </main>
      <Footer />
    </div>
  );
}
