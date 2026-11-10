import { PageShellContainer } from "@/modules/site-shell";
import { CommunityUi } from "../../components";
import { useCommunityContainer } from "../../hooks";

const CommunityContainer = () => {
  const props = useCommunityContainer();
  return (
    <PageShellContainer>
      <CommunityUi {...props} />
    </PageShellContainer>
  );
};

export default CommunityContainer;
