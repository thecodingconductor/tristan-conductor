/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import MobileNavOverlayHeader from "../../atoms/MobileNavOverlayHeader/MobileNavOverlayHeader";
import MobileNavOverlayLinks from "../../atoms/MobileNavOverlayLinks/MobileNavOverlayLinks";
import useLockBodyScroll from "../../../lib/hooks/useLockBodyScroll";

const propTypesShape = {
  isExpanded: PropTypes.bool.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const MobileNavOverlay = ({ isExpanded }: Props) => {
  const [shouldLockScroll, setShouldLockScroll] = useState(isExpanded);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.height = "100vh";
    } else {
      document.body.style.height = "";
    }

    setShouldLockScroll(isExpanded);
  }, [isExpanded]);

  useLockBodyScroll(shouldLockScroll, wrapperRef.current);

  console.log(document.body);

  return (
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
  );
};

export default MobileNavOverlay;
