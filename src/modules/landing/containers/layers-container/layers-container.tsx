import { LayersUi } from "../../components";
import { useLayersContainer } from "../../hooks";

const LayersContainer = () => {
  const props = useLayersContainer();
  return <LayersUi {...props} />;
};

export default LayersContainer;
