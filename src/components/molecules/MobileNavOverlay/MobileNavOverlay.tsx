/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useState, useEffect, useRef } from "react";
import MobileNavOverlayHeader from "../../atoms/MobileNavOverlayHeader/MobileNavOverlayHeader";
import MobileNavOverlayLinks from "../../atoms/MobileNavOverlayLinks/MobileNavOverlayLinks";
import useLockBodyScroll from "../../../lib/hooks/useLockBodyScroll";

const MobileNavOverlay = ({ isExpanded }) => {
  const [shouldLockScroll, setShouldLockScroll] = useState(isExpanded);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setShouldLockScroll(isExpanded);
  }, [isExpanded]);

  useLockBodyScroll(shouldLockScroll, wrapperRef.current);

  return (
    <div
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: "40px",
        background: "rgba(49, 72, 94, 0.62)",
        backdropFilter: "blur(74px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      ref={wrapperRef}
    >
      <MobileNavOverlayHeader />
      <MobileNavOverlayLinks />
    </div>
  );
};

export default MobileNavOverlay;
