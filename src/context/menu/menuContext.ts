import { createContext } from "react";

interface MenuContextInterface {
  isOpen: boolean;
  isSideNavVisible: boolean;
  showSideNav?: Function;
  hideSideNav?: Function;
  openMenu?: Function;
  closeMenu?: Function;
  menuAction?: Function;
}

const menuContext = createContext<MenuContextInterface>({
  isOpen: false,
  isSideNavVisible: false,
});

export default menuContext;
