import Navigation from "./Navigation";
import Drawersearch from "./DrawerSearch";
import Drawerlist from "./DrawerList";
import Messagebox from "./MessageBox";
import MessageInput from "./MessageInput";
import SingleMessage from "./SingleMessage";
import UserBanner from "./UserBanner";

const components = {
  Navigation,
  Drawersearch,
  Drawerlist,
  Messagebox,
  MessageInput,
  SingleMessage,
  UserBanner,
};

export const getComponent = (componentName) => {
  return components[componentName];
};
