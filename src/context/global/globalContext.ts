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

interface GalleryContextInterface {
  gridMediaType: string;
  changeMediaType?: Function;
}

interface GlobalContextInterface {
  menu: MenuContextInterface;
  gallery: GalleryContextInterface;
}

const globalContext = createContext<GlobalContextInterface>({
  menu: {
    isOpen: false,
    isSideNavVisible: false,
  },
  gallery: {
    gridMediaType: "photo",
  },
});

export default globalContext;
