import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/pages/company-page";
import { pageHead } from "@/utils";
import { company } from "@/content/pages/company";

export const Route = createFileRoute("/company")({
  head: () => pageHead(company.meta),
  component: CompanyPage,
});
