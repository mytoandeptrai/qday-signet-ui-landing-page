import { AgentFlowUi } from "../../components";
import { useAgentFlowContainer } from "../../hooks";

const AgentFlowContainer = () => {
  const props = useAgentFlowContainer();
  return <AgentFlowUi {...props} />;
};

export default AgentFlowContainer;
