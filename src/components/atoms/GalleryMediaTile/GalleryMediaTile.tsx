/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const propTypesShape = {
  image: PropTypes.object.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const GalleryMediaTile = ({ image }: Props) => {
  return <GatsbyImage image={image} />;
};

export default GalleryMediaTile;
