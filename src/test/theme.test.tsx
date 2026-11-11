import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { ThemeProvider, ThemeToggle } from "@/components/theme-provider";

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

const renderToggle = () =>
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );

it("starts on dark and remembers the selected version", () => {
  renderToggle();
  expect(document.documentElement.classList.contains("dark")).toBe(true);
  fireEvent.click(screen.getByRole("button", { name: "Switch to light theme" }));
  expect(document.documentElement.classList.contains("dark")).toBe(false);
  expect(localStorage.getItem("trellis-theme-v5")).toBe("light");
  fireEvent.click(screen.getByRole("button", { name: "Switch to dark theme" }));
  expect(document.documentElement.classList.contains("dark")).toBe(true);
  expect(localStorage.getItem("trellis-theme-v5")).toBe("dark");
});

it("restores the light theme preference on opening another screen", () => {
  localStorage.setItem("trellis-theme-v5", "light");
  renderToggle();
  expect(document.documentElement.classList.contains("dark")).toBe(false);
});

it("ignores a choice saved under the old storage key", () => {
  localStorage.setItem("trellis-theme", "light");
  renderToggle();
  expect(document.documentElement.classList.contains("dark")).toBe(true);
});
