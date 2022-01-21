/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { resetButton } from "../../../lib/utils/mixins";

type Props = {
  label: string;
  changeMediaType: Function;
  gridMediaType: string;
};

const GalleryButton = ({ label, changeMediaType, gridMediaType }: Props) => {
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
