import { PageShellContainer } from "@/modules/site-shell";
import { WhitepaperUi } from "../../components";
import { useWhitepaperContainer } from "../../hooks";

const WhitepaperContainer = () => {
  const props = useWhitepaperContainer();
  return (
    <PageShellContainer>
      <WhitepaperUi {...props} />
    </PageShellContainer>
  );
};

export default WhitepaperContainer;
