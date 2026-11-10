import AgentFlowContainer from "../agent-flow-container";
import { FeaturesUi } from "../../components";
import { useFeaturesContainer } from "../../hooks";

const FeaturesContainer = () => {
  const props = useFeaturesContainer();
  return <FeaturesUi {...props} agentFlow={<AgentFlowContainer />} />;
};

export default FeaturesContainer;
