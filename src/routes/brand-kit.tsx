import { createFileRoute } from "@tanstack/react-router";
import { BrandKitContainer } from "@/modules/brand-kit";
import { pageHead } from "@/utils";
import { brandKit } from "@/content/pages/brand-kit";

export const Route = createFileRoute("/brand-kit")({
  head: () => pageHead(brandKit.meta),
  component: BrandKitContainer,
});
