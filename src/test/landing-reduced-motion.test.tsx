import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";

// Motion reads the preference once, so it has to be set before the components are imported.
beforeAll(() => {
  window.matchMedia = ((query: string) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("landing-page/AC-9: reduced motion", () => {
  it("hides the pinned scroll section and keeps the flat layers", async () => {
    const { LayersContainer } = await import("@/modules/landing/containers");
    const { container } = render(<LayersContainer />);
    // The choice is CSS (so the page height is right before hydration); jsdom has no stylesheet,
    // so check the classes that carry it.
    expect(container.querySelector("[data-layers='pinned']")?.className).toContain(
      "[@media(prefers-reduced-motion:reduce)]:hidden",
    );
    expect(container.querySelector("[data-layers='flat']")?.className).not.toContain(
      "reduced-motion:reduce",
    );
  });

  it("keeps the ledger still", async () => {
    vi.useFakeTimers();
    const { LedgerContainer } = await import("@/modules/landing/containers");
    render(<LedgerContainer />);
    vi.advanceTimersByTime(30_000);
    expect(screen.getByTestId("ledger-budget")).toHaveTextContent("42.10");
  });

  it("shows the lattice in its end state, with no pulse", async () => {
    const { LatticeContainer } = await import("@/modules/landing/containers");
    const { container } = render(<LatticeContainer />);
    await vi.waitFor(() =>
      expect(container.querySelector("svg")).toHaveAttribute("data-motion", "off"),
    );
    expect(container.querySelectorAll("path[stroke='var(--accent)']")).toHaveLength(0);
  });
});
