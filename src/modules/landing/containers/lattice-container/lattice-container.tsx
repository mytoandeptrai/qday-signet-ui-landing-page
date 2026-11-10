import { LatticeUi } from "../../components";
import { useLatticeContainer } from "../../hooks";

const LatticeContainer = () => {
  const props = useLatticeContainer();
  return <LatticeUi {...props} />;
};

export default LatticeContainer;
