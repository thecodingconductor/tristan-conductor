import { IGatsbyImageData } from "gatsby-plugin-image";
import { createContext } from "react";

export interface CurrentImageType {
  image: IGatsbyImageData | null;
  photoCredit: string | null;
}

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
  currentImage: CurrentImageType;
  setCurrentImage?: Function;
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
