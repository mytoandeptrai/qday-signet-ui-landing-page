import { landing } from "@/content/landing";

const { title, sub, primaryCta, secondaryCta } = landing.hero;

export const useHeroContainer = () => ({ title, sub, primaryCta, secondaryCta });
