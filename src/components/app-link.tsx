import { Link, useRouter } from "@tanstack/react-router";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type AppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string };

/**
 * One link for every destination in the content files.
 * - "/path" navigates client side through the router.
 * - "#section" stays on the landing page, and from any other page goes to "/#section".
 * - "#" (no destination yet) and external URLs are plain anchors.
 * Without a router (unit tests rendering a section alone) it is always a plain anchor.
 */
export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink(
  { href, ...props },
  ref,
) {
  const router = useRouter({ warn: false });
  if (!router) return <a ref={ref} href={href} {...props} />;

  if (href.length > 1 && href.startsWith("#")) {
    const onLanding = router.state.location.pathname === "/";
    return <a ref={ref} href={onLanding ? href : `/${href}`} {...props} />;
  }
  if (href.startsWith("/") && !href.includes("#")) {
    return <Link ref={ref} to={href as "/"} {...(props as object)} />;
  }
  return <a ref={ref} href={href} {...props} />;
});
