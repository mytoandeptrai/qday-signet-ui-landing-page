import { useState } from "react";
import { Menu } from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { AppLink } from "@/components/app-link";
import { SignetLockup } from "@/components/signet-lockup";
import { ThemeToggle } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { landing } from "@/content/landing";
import { aboutMenu } from "@/content/nav";
import { cn } from "@/lib/utils";

const { links, cta } = landing.nav;

export function Nav() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - (scrollY.getPrevious() ?? 0);
    setScrolled(y > 8);
    // Hide while reading downward, show on any upward scroll; small jitters change nothing.
    // Reduced motion only changes the background.
    if (reduce || y <= 160 || delta < -2) setHidden(false);
    else if (delta > 2) setHidden(true);
  });

  return (
    <motion.header
      onFocusCapture={() => setHidden(false)}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={
        reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 36, mass: 0.8 }
      }
      className={cn(
        "sticky top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 md:px-8">
        <AppLink href="#top" aria-label="Signet home">
          <SignetLockup />
        </AppLink>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <AppLink
              key={l.label}
              href={l.href}
              className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </AppLink>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent p-0 text-[15px] font-normal text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground data-[state=open]:hover:bg-transparent">
                  {aboutMenu.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[min(520px,90vw)] grid-cols-2 gap-4 p-3">
                    {aboutMenu.groups.map((g) => (
                      <div key={g.title}>
                        <p className="px-3 pb-1 text-sm text-muted-foreground">{g.title}</p>
                        <ul>
                          {g.items.map((i) => (
                            <li key={i.href}>
                              <NavigationMenuLink asChild>
                                <AppLink
                                  href={i.href}
                                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-secondary focus:bg-secondary focus:outline-none"
                                >
                                  <span className="block text-[15px] text-foreground">
                                    {i.label}
                                  </span>
                                  <span className="block text-sm text-muted-foreground">
                                    {i.description}
                                  </span>
                                </AppLink>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild className="hidden rounded-full md:inline-flex">
            <a href={cta.href}>{cta.label}</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1 px-4">
                {links.map((l) => (
                  <SheetClose asChild key={l.label}>
                    <AppLink
                      href={l.href}
                      className="rounded-md py-3 text-xl text-foreground hover:text-primary"
                    >
                      {l.label}
                    </AppLink>
                  </SheetClose>
                ))}
                {aboutMenu.groups.map((g) => (
                  <div key={g.title} className="mt-4">
                    <p className="text-sm text-muted-foreground">{g.title}</p>
                    {g.items.map((i) => (
                      <SheetClose asChild key={i.href}>
                        <AppLink
                          href={i.href}
                          className="block rounded-md py-2 text-lg text-foreground hover:text-primary"
                        >
                          {i.label}
                        </AppLink>
                      </SheetClose>
                    ))}
                  </div>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
