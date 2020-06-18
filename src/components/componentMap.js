import Navigation from "./Navigation";
import Drawersearch from "./DrawerSearch";
import Drawerlist from "./DrawerList";
import Messagebox from "./MessageBox";
import MessageInput from "./MessageInput";
import SingleMessage from "./SingleMessage";

const components = {
  Navigation,
  Drawersearch,
  Drawerlist,
  Messagebox,
  MessageInput,
  SingleMessage,
};

export const getComponent = (componentName) => {
  return components[componentName];
};
