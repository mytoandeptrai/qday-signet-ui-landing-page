import { ScrollToTopUi } from "../../components";
import { useScrollToTopContainer } from "../../hooks";

const ScrollToTopContainer = () => {
  const props = useScrollToTopContainer();
  return <ScrollToTopUi {...props} />;
};

export default ScrollToTopContainer;
