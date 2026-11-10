import { createFileRoute } from "@tanstack/react-router";
import { CompanyContainer } from "@/modules/company";
import { pageHead } from "@/utils";
import { company } from "@/content/pages/company";

export const Route = createFileRoute("/company")({
  head: () => pageHead(company.meta),
  component: CompanyContainer,
});
