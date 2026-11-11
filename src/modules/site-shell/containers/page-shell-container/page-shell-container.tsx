import type { ReactNode } from "react";
import FooterContainer from "../footer-container";
import NavContainer from "../nav-container";

type PageShellContainerProps = {
  children: ReactNode;
};

/** Frame shared by every sub-page: nav, footer. */
const PageShellContainer = ({ children }: PageShellContainerProps) => (
  <div className="min-h-dvh text-foreground">
    <NavContainer />
    <main>{children}</main>
    <FooterContainer />
  </div>
);

export default PageShellContainer;
