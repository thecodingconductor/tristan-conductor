/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const propTypesShape = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const GalleryMediaTile = ({ image, alt }) => {
  return <GatsbyImage image={image} alt={alt} />;
};

export default GalleryMediaTile;
