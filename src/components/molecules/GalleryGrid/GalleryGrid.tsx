/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useContext, useEffect } from "react";
import * as PropTypes from "prop-types";
import GalleryMediaTile from "../../atoms/GalleryMediaTile/GalleryMediaTile";
import { getImage } from "gatsby-plugin-image";

import GalleryContext from "../../../context/gallery/GalleryContext";
import HomePageVideo from "../../atoms/HomePageVideo/HomePageVideo";

const propTypesShape = {
  photoItemsArray: PropTypes.array.isRequired,
  videoItemsArray: PropTypes.array.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const GalleryGrid = ({ photoItemsArray, videoItemsArray }: Props) => {
  const galleryContext = useContext(GalleryContext);
  const { gridMediaType } = galleryContext;

  console.log(gridMediaType);

  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "1 / span 12"],
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
        marginTop: "200px",
      }}
    >
      {gridMediaType === "photo"
        ? photoItemsArray.map((imageItem, i) => {
            const image = getImage(imageItem.node.image.gatsbyImageData);

            return (
              <div
                sx={{
                  gridColumn: ["auto / span 5", null, "auto / span 4"],
                  height: `${image.height}px`,
                }}
                key={i}
              >
                <GalleryMediaTile image={image} alt={imageItem.node.alt} />
              </div>
            );
          })
        : videoItemsArray.map((video, i) => {
            return (
              <div
                sx={{
                  gridColumn: ["auto / span 5", null, "auto / span 12"],
                }}
                key={i}
              >
                <HomePageVideo
                  videoSrcURL={video.videoUrl}
                  videoTitle={video.videoTitle}
                />
              </div>
            );
          })}
    </div>
  );
};

export default GalleryGrid;
