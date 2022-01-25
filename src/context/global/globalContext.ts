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
  showImageDetail: boolean;
  selectImage?: Function;
  closeImage?: Function;
  setPhoto?: Function;
  setVideo?: Function;
}

interface FormContextInterface {
  isSubmitted: boolean;
  onSubmit?: Function;
}

interface GlobalContextInterface {
  menu: MenuContextInterface;
  gallery: GalleryContextInterface;
  form: FormContextInterface;
}

const globalContext = createContext<GlobalContextInterface | null>(null);

export default globalContext;
