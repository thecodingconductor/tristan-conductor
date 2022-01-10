/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

const MobileNavOverlayHeader = () => {
  return (
    <div
      sx={{
        height: "47px",
        width: "227px",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        marginBottom: "30px",
      }}
    >
      <Themed.h1
        sx={{
          color: "black",
          fontSize: "21px",
          fontWeight: 800,
        }}
      >
        Tristan Rais-Sherman
      </Themed.h1>
    </div>
  );
};

export default MobileNavOverlayHeader;
