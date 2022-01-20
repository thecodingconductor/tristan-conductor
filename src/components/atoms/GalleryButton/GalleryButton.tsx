/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { resetButton } from "../../../lib/utils/mixins";

import GalleryContext from "../../../context/gallery/galleryContext";
const propTypesShape = {
  label: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const GalleryButton = ({ label }: Props) => {
  const galleryContext = useContext(GalleryContext);

  const { changeMediaType } = galleryContext;

  return (
    <button
      onClick={() => changeMediaType(label)}
      sx={{
        ...resetButton,
      }}
    >
      <Themed.h2>{label}</Themed.h2>
    </button>
  );
};

export default GalleryButton;
