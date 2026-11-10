import { PageShellContainer } from "@/modules/site-shell";
import { MediaUi } from "../../components";
import { useMediaContainer } from "../../hooks";

const MediaContainer = () => {
  const props = useMediaContainer();
  return (
    <PageShellContainer>
      <MediaUi {...props} />
    </PageShellContainer>
  );
};

export default MediaContainer;
