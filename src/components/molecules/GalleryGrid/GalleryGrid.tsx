/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import GalleryMediaTile from "../../atoms/GalleryMediaTile/GalleryMediaTile";
import { getImage } from "gatsby-plugin-image";

const propTypesShape = {
  mediaItemsArray: PropTypes.array.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const GalleryGrid = ({ mediaItemsArray }: Props) => {
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "1 / span 12"],
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
      }}
    >
      {mediaItemsArray.map((imageItem, i) => {
        // console.log(imageItem.node.image.gatsbyImageData);
        const image = getImage(imageItem.node.image.gatsbyImageData);
        // console.log(image);

        return (
          <div
            sx={{
              gridColumn: ["auto / span 5", null, "auto / span 4"],
              height: `${image.height}px`,
            }}
            key={i}
          >
            <GalleryMediaTile image={image} />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryGrid;
