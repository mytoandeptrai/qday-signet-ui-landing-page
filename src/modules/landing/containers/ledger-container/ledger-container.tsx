import { LedgerUi } from "../../components";
import { useLedgerContainer } from "../../hooks";

const LedgerContainer = () => {
  const props = useLedgerContainer();
  return <LedgerUi {...props} />;
};

export default LedgerContainer;
