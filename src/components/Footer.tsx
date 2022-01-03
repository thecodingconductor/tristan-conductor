/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

const footerContainerStyles = {
  width: "100%",
  bg: "rgba(0,0,0,0.26)",
  display: "flex",
  px: ["30px", null, "50px"],
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
