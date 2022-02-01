/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import GalleryMediaTile from "../../atoms/GalleryMediaTile/GalleryMediaTile";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

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
  selectImage,
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
      <AnimatePresence>
        {gridMediaType === "photo"
          ? photoItemsArray.map((imageItem, i) => {
              const image: IGatsbyImageData | undefined = getImage(
                imageItem.node.image.gatsbyImageData
              );

              const photoCredit: string = imageItem.node.photoCredit;

              return (
                <motion.button
                  key={i}
                  sx={{
                    ...resetButton,
                    gridColumn: ["auto / span 5", null, "auto / span 4"],
                    height: `368 px`,
                  }}
                  onClick={() => selectImage(image, photoCredit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                >
                  <div>
                    <GalleryMediaTile image={image!} alt={imageItem.node.alt} />
                  </div>
                </motion.button>
              );
            })
          : videoItemsArray.map((video, i) => {
              return (
                <React.Fragment key={i}>
                  <motion.div
                    sx={{
                      gridColumn: ["1 / span 5", null, "1 / span 12"],
                      paddingBottom: "56.25%",
                      height: 0,
                      position: "relative",
                      marginBottom: "50px",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                  >
                    <GalleryVideo
                      videoSrcURL={video.node.videoUrl}
                      videoTitle={video.node.videoTitle}
                    />
                  </motion.div>
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
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
