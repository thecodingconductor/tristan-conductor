/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { resetButton } from "../../../lib/utils/mixins";

const propTypesShape = {
  onClick: PropTypes.func.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const MobileNavIcon = ({ onClick }: Props) => {
  console.log(onClick);
  return (
    <div
      sx={{
        height: "43px",
        width: "88px",
        background: "white",
        position: "fixed",
        zIndex: 100,
        top: "30px",
        left: 0,
      }}
    >
      <button
        sx={{
          ...resetButton,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
        onClick={onClick}
      >
        <Themed.h1
          sx={{
            color: "black",
            fontSize: "21px",
          }}
        >
          T R - S
        </Themed.h1>
      </button>
    </div>
  );
};

export default MobileNavIcon;
