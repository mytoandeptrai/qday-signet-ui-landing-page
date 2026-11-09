import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LandingPage } from "@/components/landing/landing-page";
import { Ledger } from "@/components/landing/ledger";
import { Hero } from "@/components/landing/hero";
import { SignetLockup } from "@/components/signet-lockup";
import { ThemeProvider } from "@/components/theme-provider";
import { landing } from "@/content/landing";

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("dark");
  vi.useRealTimers();
});

const renderLanding = () =>
  render(
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>,
  );

describe("landing-page/AC-3: every section renders", () => {
  it("has nav, hero, how it works, three features, CLI, works-with marquee, closing CTA and footer", () => {
    renderLanding();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Let your agents pay.Within the limits you set.",
    );
    expect(
      within(screen.getByRole("main")).getAllByRole("link", { name: /early access|docs/i }),
    ).toHaveLength(2);
    expect(screen.getByRole("list", { name: "Recent payments" })).toBeInTheDocument();
    for (const name of [
      "How Signet works",
      "Agents",
      "SignetPass",
      "Trellis wallet",
      "Start from the terminal",
      landing.cta.title,
    ]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }
    expect(screen.queryByText("Backed by")).not.toBeInTheDocument();
    expect(screen.getByText("Works with")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("points every link without a destination at #", () => {
    renderLanding();
    for (const name of ["Read the docs", "Docs", "Discord", "Terms", "Privacy"]) {
      for (const a of screen.getAllByRole("link", { name })) expect(a).toHaveAttribute("href", "#");
    }
  });
});

describe("landing-page/AC-4: copy comes from content", () => {
  it("shows a changed H1 without touching the component", () => {
    const original = [...landing.hero.title];
    landing.hero.title.splice(0, 2, "A new headline.", "Second line.");
    try {
      render(<Hero />);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        "A new headline.Second line.",
      );
    } finally {
      landing.hero.title.splice(0, 2, ...original);
    }
  });
});

describe("landing-page/AC-5: lockup follows the theme", () => {
  it("renders both variants named 'Signet on QDAY' and lets the dark class choose one", () => {
    render(<SignetLockup />);
    const [light, dark] = screen.getAllByAltText("Signet on QDAY");
    expect(light).toHaveClass("dark:hidden");
    expect(light).not.toHaveClass("hidden");
    expect(dark).toHaveClass("hidden", "dark:block");
  });
});

describe("landing-page/AC-7: mobile menu", () => {
  it("opens a sheet with every link, closes on Escape and returns focus to the button", async () => {
    renderLanding();
    const button = screen.getByRole("button", { name: "Open menu" });
    button.focus();
    fireEvent.click(button);
    const sheet = await screen.findByRole("dialog");
    for (const l of landing.nav.links) {
      expect(within(sheet).getByRole("link", { name: l.label })).toHaveAttribute("href", l.href);
    }
    fireEvent.keyDown(sheet, { key: "Escape" });
    await vi.waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    await vi.waitFor(() => expect(button).toHaveFocus());
  });
});

describe("landing-page/AC-8: theme toggle", () => {
  it("turns on .dark from the nav and remembers it", () => {
    renderLanding();
    fireEvent.click(screen.getByRole("button", { name: "Switch to dark theme" }));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("trellis-theme")).toBe("dark");
  });
});

describe("landing-page/AC-10: ledger pauses in the background", () => {
  const setVisibility = (state: "visible" | "hidden") => {
    Object.defineProperty(document, "visibilityState", { value: state, configurable: true });
    document.dispatchEvent(new Event("visibilitychange"));
  };
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => setVisibility("visible"));

  it("adds a payment while visible", () => {
    render(<Ledger />);
    expect(screen.getByTestId("ledger-budget")).toHaveTextContent("42.10");
    act(() => vi.advanceTimersByTime(7000));
    expect(screen.getByTestId("ledger-budget")).toHaveTextContent("42.70");
  });

  it("adds nothing once the tab is hidden", () => {
    render(<Ledger />);
    act(() => setVisibility("hidden"));
    act(() => vi.advanceTimersByTime(10_000));
    expect(screen.getByTestId("ledger-budget")).toHaveTextContent("42.10");
  });
});
