import LatticeContainer from "../lattice-container";
import LedgerContainer from "../ledger-container";
import { HeroUi } from "../../components";
import { useHeroContainer } from "../../hooks";

const HeroContainer = () => {
  const props = useHeroContainer();
  return <HeroUi {...props} lattice={<LatticeContainer />} ledger={<LedgerContainer />} />;
};

export default HeroContainer;
