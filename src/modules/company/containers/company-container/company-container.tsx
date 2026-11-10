import { PageShellContainer } from "@/modules/site-shell";
import { CompanyUi } from "../../components";
import { useCompanyContainer } from "../../hooks";

const CompanyContainer = () => {
  const props = useCompanyContainer();
  return (
    <PageShellContainer>
      <CompanyUi {...props} />
    </PageShellContainer>
  );
};

export default CompanyContainer;
