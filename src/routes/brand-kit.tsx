import { createFileRoute } from "@tanstack/react-router";
import { BrandKitPage } from "@/components/pages/brand-kit-page";
import { pageHead } from "@/utils";
import { brandKit } from "@/content/pages/brand-kit";

export const Route = createFileRoute("/brand-kit")({
  head: () => pageHead(brandKit.meta),
  component: BrandKitPage,
});
