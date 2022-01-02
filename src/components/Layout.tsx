/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import "@fontsource/inter";
import { Grid } from "theme-ui";

const globalSiteContainerStyles = {
  width: "100%",
  padding: ["0 30px", null, "0 140px"],
  backgroundColor: "black",
};

const gridParentStyles = {
  height: "inherit",
  width: "inherit",
  display: "grid",
  gridGap: "20px",
  gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(16, 1fr)"],
};

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        ...globalSiteContainerStyles,
      }}
    >
      <div
        sx={{
          ...gridParentStyles,
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
