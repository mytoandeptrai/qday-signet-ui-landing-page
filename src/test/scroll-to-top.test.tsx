import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScrollToTopContainer } from "@/modules/site-shell";
import { scrollTop } from "@/content/nav";

afterEach(cleanup);

describe("scroll to top", () => {
  it("is hidden from assistive tech until the page has scrolled", () => {
    render(<ScrollToTopContainer />);
    expect(screen.getByLabelText(scrollTop.label)).toHaveAttribute("aria-hidden", "true");
  });

  it("scrolls the window to the top, smoothly, when clicked", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    render(<ScrollToTopContainer />);
    fireEvent.click(screen.getByLabelText(scrollTop.label));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
