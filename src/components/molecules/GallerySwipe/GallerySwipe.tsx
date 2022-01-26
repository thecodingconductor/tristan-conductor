/** @jsx jsx */
import { jsx } from "theme-ui";
import { useContext } from "react";
import GlobalContext from "../../../context/global/globalContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import "swiper/css";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

type Props = {
  currentImage: IGatsbyImageData;
  imageArray: Array<any>;
};

const GallerySwipe = ({ currentImage, imageArray }: Props) => {
  const globalContext = useContext(GlobalContext);
  const { gallery } = globalContext;

  return (
    <Swiper watchSlidesProgress slidesPerView={1}>
      {imageArray.map((image, i) => (
        <SwiperSlide key={i}>
          <GatsbyImage image={currentImage} alt="Gatsby Image Test" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySwipe;
