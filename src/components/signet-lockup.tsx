import onDark from "@/assets/lockup-blue-on-dark.svg";
import onLight from "@/assets/lockup-blue.svg";
import { cn } from "@/lib/utils";

/**
 * Horizontal lockup (mark + "Signet on QDAY"). Both colour variants render and CSS picks one from
 * the `.dark` class, so theme changes need no JS and cannot mismatch on hydration.
 */
export function SignetLockup({ className }: { className?: string }) {
  return (
    <>
      <img
        src={onLight}
        alt="Signet on QDAY"
        className={cn("h-auto w-[150px] dark:hidden", className)}
      />
      <img
        src={onDark}
        alt="Signet on QDAY"
        className={cn("hidden h-auto w-[150px] dark:block", className)}
      />
    </>
  );
}
