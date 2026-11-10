import { LogosUi } from "../../components";
import { useLogosContainer } from "../../hooks";

const LogosContainer = () => {
  const props = useLogosContainer();
  return <LogosUi {...props} />;
};

export default LogosContainer;
