/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useContext, useEffect } from "react";
import * as PropTypes from "prop-types";
import Footer from "./Footer";
import Background from "./atoms/Background/Background";
import MobileNavOverlay from "./molecules/MobileNavOverlay/MobileNavOverlay";
import useBreakpoints from "../lib/hooks/useBreakpoints";
import MobileNavIcon from "./atoms/MobileNavIcon/MobileNavIcon";
import "@fontsource/inter";
import "@fontsource/lora";

import MenuState from "../context/menu/MenuState";
import GalleryState from "../context/gallery/GalleryState";

const propTypesShape = {
  onClick: PropTypes.func.isRequired,
};

const Layout = ({ children }) => {
  const { isLarge, isMediumAndBelow } = useBreakpoints();

  return (
    <MenuState>
      <GalleryState>
        <div
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <MobileNavIcon />
          <div
            sx={{
              height: "inherit",
              width: "inherit",
              display: "grid",
              gridGap: "20px",
              gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
              padding: ["0 30px", null, "0 140px"],
            }}
          >
            {children}
          </div>
          <Footer />

          <Background />

          <MobileNavOverlay />
        </div>
      </GalleryState>
    </MenuState>
  );
};

export default Layout;
