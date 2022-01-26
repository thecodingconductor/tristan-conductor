/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useContext, useEffect } from "react";
import * as PropTypes from "prop-types";
import GalleryMediaTile from "../../atoms/GalleryMediaTile/GalleryMediaTile";
import { getImage } from "gatsby-plugin-image";

import HomePageVideo from "../../atoms/HomePageVideo/HomePageVideo";
import GalleryVideo from "../../atoms/GalleryVideo/GalleryVideo";
import { resetButton } from "../../../lib/utils/mixins";
import { AnimatePresence, motion } from "framer-motion";

const propTypesShape = {
  photoItemsArray: PropTypes.array.isRequired,
  videoItemsArray: PropTypes.array.isRequired,
  gridMediaType: PropTypes.string.isRequired,
  showImageDetail: PropTypes.bool.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape> & {
  selectImage: Function;
  closeImage: Function;
};

const GalleryGrid = ({
  photoItemsArray,
  videoItemsArray,
  gridMediaType,
  showImageDetail,
  selectImage,
  closeImage,
}: Props) => {
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "1 / span 12"],
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
        marginTop: "100px",
        marginBottom: "150px",
      }}
    >
      {gridMediaType === "photo"
        ? photoItemsArray.map((imageItem, i) => {
            const image = getImage(imageItem.node.image.gatsbyImageData);
            return (
              <button
                key={i}
                sx={{
                  ...resetButton,
                  gridColumn: ["auto / span 5", null, "auto / span 4"],
                  height: `368 px`,
                }}
                onClick={() => selectImage(image)}
              >
                <div>
                  <GalleryMediaTile image={image} alt={imageItem.node.alt} />
                </div>
              </button>
            );
          })
        : videoItemsArray.map((video, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  sx={{
                    gridColumn: ["1 / span 5", null, "1 / span 12"],
                    paddingBottom: "56.25%",
                    height: 0,
                    position: "relative",
                    marginBottom: "50px",
                  }}
                >
                  <GalleryVideo
                    videoSrcURL={video.node.videoUrl}
                    videoTitle={video.node.videoTitle}
                  />
                </div>
                <div
                  sx={{
                    gridColumn: ["1 / span 5", null, "1 / span 12"],
                    display: "flex",
                    width: "100%",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "50px",
                  }}
                >
                  <div
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Themed.p
                      sx={{
                        textAlign: "left",
                      }}
                    >
                      {video.node.videoDate}
                    </Themed.p>
                  </div>
                  <div
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    <Themed.p
                      sx={{
                        textAlign: "left",
                        marginBottom: "50px",
                      }}
                    >
                      {video.node.videoTitle}
                    </Themed.p>
                    <Themed.p
                      sx={{
                        textAlign: "left",
                      }}
                    >
                      {video.node.videoLocation}
                    </Themed.p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
};

export default GalleryGrid;
