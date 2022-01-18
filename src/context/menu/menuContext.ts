import { createContext } from "react";

interface MenuContextInterface {
  isOpen: boolean;
  openMenu?: Function;
  closeMenu?: Function;
}

const menuContext = createContext<MenuContextInterface>({
  isOpen: false,
});

export default menuContext;
