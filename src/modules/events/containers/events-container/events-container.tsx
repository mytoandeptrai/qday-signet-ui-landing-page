import { PageShellContainer } from "@/modules/site-shell";
import { EventsUi } from "../../components";
import { useEventsContainer } from "../../hooks";

const EventsContainer = () => {
  const props = useEventsContainer();
  return (
    <PageShellContainer>
      <EventsUi {...props} />
    </PageShellContainer>
  );
};

export default EventsContainer;
