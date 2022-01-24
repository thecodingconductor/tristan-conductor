/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useContext, useEffect } from "react";
import { globalHistory } from "@reach/router";
import * as PropTypes from "prop-types";
import Footer from "./Footer";
import Background from "./atoms/Background/Background";
import MobileNavOverlay from "./molecules/MobileNavOverlay/MobileNavOverlay";
import useBreakpoints from "../lib/hooks/useBreakpoints";
import MobileNavIcon from "./atoms/MobileNavIcon/MobileNavIcon";
import "@fontsource/inter";
import "@fontsource/lora";

import GlobalContext from "../context/global/globalContext";

const propTypesShape = {
  onClick: PropTypes.func.isRequired,
};

const Layout = (props) => {
  const { isLarge, isMediumAndBelow } = useBreakpoints();

  const globalContext = useContext(GlobalContext);
  const { closeMenu, openMenu, isOpen, isSideNavVisible, hideSideNav } =
    globalContext.menu;

  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
      }}
      className="layout-wrap"
    >
      <MobileNavIcon
        closeMenu={closeMenu}
        openMenu={openMenu}
        isOpen={isOpen}
        isSideNavVisible={isSideNavVisible}
      />
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
        {props.children}
      </div>
      <Footer />

      <Background />

      <MobileNavOverlay isOpen={isOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Layout;
