import { NavUi } from "../../components";
import { useNavContainer } from "../../hooks";

const NavContainer = () => {
  const props = useNavContainer();
  return <NavUi {...props} />;
};

export default NavContainer;
