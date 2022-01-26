/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { resetButton } from "../../../lib/utils/mixins";

type Props = {
  label: string;
  setPhoto: Function;
  setVideo: Function;
  gridMediaType: string;
};

const GalleryButton = ({ label, setPhoto, setVideo, gridMediaType }: Props) => {
  const handleGallerySwitch = (label: string) => {
    if (label.toLowerCase().trim() === gridMediaType) {
      return;
    }

    if (gridMediaType === "photo") {
      setVideo();
    } else if (gridMediaType === "video") {
      setPhoto();
    }
  };

  return (
    <button
      onClick={() => handleGallerySwitch(label)}
      sx={{
        ...resetButton,
      }}
    >
      <Themed.h2>{label}</Themed.h2>
    </button>
  );
};

export default GalleryButton;
