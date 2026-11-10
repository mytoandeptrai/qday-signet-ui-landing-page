import { PageShellContainer } from "@/modules/site-shell";
import { BrandKitUi } from "../../components";
import { useBrandKitContainer } from "../../hooks";

const BrandKitContainer = () => {
  const props = useBrandKitContainer();
  return (
    <PageShellContainer>
      <BrandKitUi {...props} />
    </PageShellContainer>
  );
};

export default BrandKitContainer;
