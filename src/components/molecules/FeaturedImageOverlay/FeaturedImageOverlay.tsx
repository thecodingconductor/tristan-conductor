/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useEffect, useRef, useState } from "react";
import GallerySwipe from "../GallerySwipe/GallerySwipe";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  showImageDetail: boolean;
  closeImage: Function;
  currentImage: IGatsbyImageData;
};

const FeaturedImageOverlay = ({
  showImageDetail,
  closeImage,
  currentImage,
}: Props) => {
  const overlayRef = useRef(null);

  //   this actaully works!

  // https://github.com/willmcpo/body-scroll-lock/issues/154/
  useEffect(() => {
    if (typeof window === "undefined") return;
    const gatsbyDiv = document.getElementById("gatsby-focus-wrapper");

    if (showImageDetail) {
      gatsbyDiv.style.height = "100%";
      document.documentElement.style.overflow = "hidden";
      disableBodyScroll(overlayRef.current);
    } else {
      gatsbyDiv.style.height = "auto";
      document.documentElement.style.overflow = "auto";

      enableBodyScroll(overlayRef.current);
    }
    return clearAllBodyScrollLocks();
  }, [showImageDetail]);

  return (
    <div
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        gridColumn: ["1 / span 5"],
        background: "rgba(49, 72, 94, 0.62)",
        backdropFilter: "blur(74px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      ref={overlayRef}
    >
      <GallerySwipe currentImage={currentImage} />
      <button onClick={() => closeImage()}>Close</button>
    </div>
  );
};

export default FeaturedImageOverlay;
