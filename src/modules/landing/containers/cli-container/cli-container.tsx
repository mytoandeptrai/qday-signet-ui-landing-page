import { CliUi } from "../../components";
import { useCliContainer } from "../../hooks";

const CliContainer = () => {
  const props = useCliContainer();
  return <CliUi {...props} />;
};

export default CliContainer;
