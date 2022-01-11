/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, createContext } from "react";
import * as PropTypes from "prop-types";
import Footer from "./Footer";
import Background from "./atoms/Background/Background";
import MobileNavOverlay from "./molecules/MobileNavOverlay/MobileNavOverlay";
import useBreakpoints from "../lib/hooks/useBreakpoints";

import "@fontsource/inter";

const propTypesShape = {
  onClick: PropTypes.func.isRequired,
};

const Layout = ({ children }) => {
  const { isLarge, isMediumAndBelow } = useBreakpoints();
  const [isOpen, setIsOpen] = useState(false);

  const defaultState = {
    isOpen,
    setIsOpen,
  };

  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
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
      {/* Change this */}
      {isMediumAndBelow && isOpen && <MobileNavOverlay isExpanded={false} />}
    </div>
  );
};

export default Layout;
