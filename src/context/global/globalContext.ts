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

interface CurrentPageInterface {
  currentPage: string;
  setCurrentPage?: Function;
}

interface FormContextInterface {
  isSubmitted: boolean;
  onSubmit?: Function;
}

interface EventsContextInterface {
  eventType: string;
  showPastEvents?: Function;
  showUpcomingEvents?: Function;
  upcomingEvents: Array<any>;
  pastEvents: Array<any>;
  sortEvents?: Function;
  eventsSorted?: Function;
}

interface GlobalContextInterface {
  menu: MenuContextInterface;
  gallery: GalleryContextInterface;
  form: FormContextInterface;
  currentPage: CurrentPageInterface;
  events: EventsContextInterface;
}

const globalContext = createContext<GlobalContextInterface | null>(null);

export default globalContext;
