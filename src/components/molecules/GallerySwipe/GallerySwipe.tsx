/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import "swiper/css";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CurrentImageType } from "../../../context/global//globalContext";
import { relative } from "path/posix";

SwiperCore.use([Navigation]);

type Props = {
  currentImage: CurrentImageType;
  imageArray: Array<any>;
};

const GallerySwipe = ({ currentImage, imageArray }: Props) => {
  return (
    // <Swiper watchSlidesProgress slidesPerView={1}>
    //   {imageArray.map((image, i) => {
    //     console.log(image);
    //     return (
    //       <SwiperSlide key={i}>
    <div
      sx={{
        width: "75%",
        marginTop: "40px",
        position: "relative",
      }}
    >
      <GatsbyImage image={currentImage.image!} alt="Gatsby Image Test" />
      <div
        sx={{
          transform: "rotate(-90deg)",
          position: "absolute",
          bottom: 60,
          right: -90,
        }}
      >
        <Themed.p
          sx={{
            color: "grey",
          }}
        >
          &copy; {currentImage.photoCredit}
        </Themed.p>
      </div>
    </div>

    //       </SwiperSlide>
    //     );
    //   })}
    // </Swiper>
  );
};

export default GallerySwipe;
