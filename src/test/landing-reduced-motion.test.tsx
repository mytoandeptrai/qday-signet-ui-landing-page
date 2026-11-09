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
  it("renders the layers flat, without the pinned scroll section", async () => {
    const { Layers } = await import("@/components/landing/layers");
    const { container } = render(<Layers />);
    await vi.waitFor(() => expect(container.querySelector("[data-layers]")).not.toBeNull());
    expect(container.querySelector("[data-layers]")).toHaveAttribute("data-layers", "flat");
  });

  it("keeps the ledger still", async () => {
    vi.useFakeTimers();
    const { Ledger } = await import("@/components/landing/ledger");
    render(<Ledger />);
    vi.advanceTimersByTime(30_000);
    expect(screen.getByTestId("ledger-budget")).toHaveTextContent("42.10");
  });

  it("shows the lattice in its end state, with no pulse", async () => {
    const { Lattice } = await import("@/components/landing/lattice");
    const { container } = render(<Lattice />);
    await vi.waitFor(() =>
      expect(container.querySelector("svg")).toHaveAttribute("data-motion", "off"),
    );
    expect(container.querySelectorAll("path[stroke='var(--accent)']")).toHaveLength(0);
  });
});
