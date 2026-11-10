import { FooterContainer, NavContainer } from "@/modules/site-shell";
import CliContainer from "../cli-container";
import FeaturesContainer from "../features-container";
import HeroContainer from "../hero-container";
import LayersContainer from "../layers-container";
import LogosContainer from "../logos-container";

const LandingContainer = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <NavContainer />
      <main>
        <HeroContainer />
        <LayersContainer />
        <FeaturesContainer />
        <CliContainer />
        <LogosContainer />
      </main>
      <FooterContainer />
    </div>
  );
};

export default LandingContainer;
