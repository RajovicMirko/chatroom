import Navigation from "./Navigation";
import Drawersearch from "./DrawerSearch";
import Drawerlist from "./DrawerList";

const components = {
  Navigation,
  Drawersearch,
  Drawerlist,
};

export const getComponent = (componentName) => {
  return components[componentName];
};
