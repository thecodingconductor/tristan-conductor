/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import MobileNavOverlayHeader from "../../atoms/MobileNavOverlayHeader/MobileNavOverlayHeader";

const MobileNavOverlay = () => {
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
      }}
    >
      <div>
        <MobileNavOverlayHeader />
      </div>
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
    </div>
  );
};

export default MobileNavOverlay;
