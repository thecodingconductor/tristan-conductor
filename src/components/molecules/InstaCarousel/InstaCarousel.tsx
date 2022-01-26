/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";

// import "swiper/swiper-bundle.min.css";
import "swiper/css";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HomePageInstaTile from "../../atoms/HomePageInstaTile/HomePageInstaTile";
import { getImage } from "gatsby-plugin-image";

SwiperCore.use([Navigation]);

// const propTypesShape = {
//   instaPosts: PropTypes.arrayOf(
//     PropTypes.shape({
//       node: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         timestamp: PropTypes.number.isRequired,
//         caption: PropTypes.string.isRequired,
//         username: PropTypes.string.isRequired,
//         permalink: PropTypes.string.isRequired,
//         thumbnail_url: PropTypes.string.isRequired,
//         localImage: PropTypes.object,
//         media_url: PropTypes.string.isRequired,
//       }),
//     })
//   ),
// };

// type Props = PropTypes.InferProps<typeof propTypesShape>;

const swiperWrapperStyles = {
  gridColumn: ["1 / span 5", null, "1 / span 12"],
};

const InstaCarousel = ({ instaPosts }) => {
  return (
    <div
      sx={{
        ...swiperWrapperStyles,
      }}
    >
      <Swiper watchSlidesProgress spaceBetween={14} slidesPerView={1.5}>
        {instaPosts.map((post) => {
          return (
            <SwiperSlide key={post.node.id}>
              <HomePageInstaTile node={post.node} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default InstaCarousel;
