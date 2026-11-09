import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
const matchedRoute = (path: string) => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  return router.matchRoutes(path).at(-1)?.routeId;
};

describe("landing-page/AC-1: only the landing and the design kit are routes", () => {
  it("matches a page of its own for / and /design-kit", () => {
    expect(matchedRoute("/")).toBe("/");
    expect(matchedRoute("/design-kit")).toBe("/design-kit");
  });
});

describe("landing-page/AC-2: old app routes are gone", () => {
  it.each(["/wallet", "/agentic", "/send"])("%s falls through to not found", (path) => {
    expect(matchedRoute(path)).toBe(rootRouteId);
  });
});
