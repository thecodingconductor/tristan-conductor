/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useEffect, useContext } from "react";
import GlobalContext from "../../../context/global/globalContext";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import "swiper/css";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

type Props = {
  currentImage: IGatsbyImageData;
};

const GallerySwipe = ({ currentImage }: Props) => {
  const globalContext = useContext(GlobalContext);
  const { gallery } = globalContext;

  console.log(currentImage);
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "1 / span 12"],
      }}
    >
      <Swiper watchSlidesProgress slidesPerView={1}>
        <GatsbyImage image={currentImage} alt="Gatsby Image Test" />
      </Swiper>
    </div>
  );
};

export default GallerySwipe;
