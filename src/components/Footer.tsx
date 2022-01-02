/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

const footerContainerStyles = {
  gridColumn: ["1 / span 5", null, "1 / span 16"],
  bg: "rgba(0,0,0,0.26",
  display: "flex",
};

const Footer = () => {
  return (
    <div
      sx={{
        ...footerContainerStyles,
        flexDirection: ["column", null, "row"],
      }}
    >
      <Themed.p>e: tristan.raissherman@gmail.com</Themed.p>
      <Themed.p
        sx={{
          color: "#FCFDFF69",
        }}
      >
        &copy; 2022 Tristan Rais-Sherman
      </Themed.p>
      <Themed.p
        sx={{
          color: "#FCFDFF69",
        }}
      >
        Website built by Tristan Rais-Sherman
      </Themed.p>
    </div>
  );
};

export default Footer;
