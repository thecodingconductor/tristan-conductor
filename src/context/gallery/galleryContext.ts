import { createContext } from "react";

interface GalleryContextInterface {
  gridMediaType: string;
  changeMediaType?: Function;
}

const galleryContext = createContext<GalleryContextInterface>({
  gridMediaType: "photo",
});

export default galleryContext;
