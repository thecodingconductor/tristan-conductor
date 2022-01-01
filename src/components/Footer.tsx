/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const footerContainerStyles = {
  gridColumn: ["1 / span 5", null, "1 / span 16"],
};

const Footer = () => {
  return (
    <div
      sx={{
        ...footerContainerStyles,
      }}
    >
      This is Footer
    </div>
  );
};

export default Footer;
