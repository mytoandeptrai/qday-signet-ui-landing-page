import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScrollToTopUiProps = {
  label: string;
  visible: boolean;
  onClick: () => void;
};

const ScrollToTopUi = ({ label, visible, onClick }: ScrollToTopUiProps) => {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={label}
      aria-hidden={!visible}
      inert={!visible}
      onClick={onClick}
      // Sits above the CommentLayer toolbar (bottom-4 right-4).
      className={cn(
        "fixed bottom-16 right-4 z-40 rounded-full bg-background shadow-md transition-[opacity,transform] duration-200 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <ArrowUp />
    </Button>
  );
};

export default ScrollToTopUi;
