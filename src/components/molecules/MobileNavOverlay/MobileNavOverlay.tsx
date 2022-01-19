/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useState, useEffect, useRef, useContext } from "react";
import MobileNavOverlayHeader from "../../atoms/MobileNavOverlayHeader/MobileNavOverlayHeader";
import MobileNavOverlayLinks from "../../atoms/MobileNavOverlayLinks/MobileNavOverlayLinks";
import useLockBodyScroll from "../../../lib/hooks/useLockBodyScroll";
import MenuContext from "../../../context/menu/menuContext";

const MobileNavOverlay = (props) => {
  const menuContext = useContext(MenuContext);
  const { isOpen } = menuContext;

  const [shouldLockScroll, setShouldLockScroll] = useState(isOpen);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = "100vh";
    } else {
      document.body.style.height = "";
    }

    setShouldLockScroll(isOpen);
  }, [isOpen]);

  useLockBodyScroll(shouldLockScroll, wrapperRef.current);

  return (
    <>
      {isOpen && (
        <div
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            right: "40px",
            background: "rgba(49, 72, 94, 0.62)",
            backdropFilter: "blur(74px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 99,
          }}
          ref={wrapperRef}
        >
          <MobileNavOverlayHeader />
          <MobileNavOverlayLinks />
        </div>
      )}
    </>
  );
};

export default MobileNavOverlay;
