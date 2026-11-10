import { landing } from "@/content/landing";

const { id, title, body, lines } = landing.cli;

export const useCliContainer = () => ({ id, title, body, lines });
