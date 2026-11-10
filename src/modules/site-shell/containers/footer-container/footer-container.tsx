import { FooterUi } from "../../components";
import { useFooterContainer } from "../../hooks";

const FooterContainer = () => {
  const props = useFooterContainer();
  return <FooterUi {...props} />;
};

export default FooterContainer;
