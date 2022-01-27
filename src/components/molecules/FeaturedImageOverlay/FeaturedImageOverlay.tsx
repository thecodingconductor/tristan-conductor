/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { useEffect, useRef } from "react";
import GallerySwipe from "../GallerySwipe/GallerySwipe";
import { resetButton } from "../../../lib/utils/mixins";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import CloseIcon from "../../../assets/icon-close.svg";

type Props = {
  showImageDetail: boolean;
  closeImage: Function;
  currentImage: IGatsbyImageData;
  imageArray: Array<any>;
};

const FeaturedImageOverlay = ({
  showImageDetail,
  closeImage,
  currentImage,
  imageArray,
}: Props) => {
  const overlayRef = useRef(null);

  //   this actaully works!

  // https://github.com/willmcpo/body-scroll-lock/issues/154/
  useEffect(() => {
    if (typeof window === "undefined") return;
    const gatsbyDiv = document.getElementById("gatsby-focus-wrapper");

    if (showImageDetail) {
      gatsbyDiv!.style.height = "100%";
      document.documentElement.style.overflow = "hidden";
      disableBodyScroll(overlayRef.current);
    } else {
      gatsbyDiv!.style.height = "auto";
      document.documentElement.style.overflow = "auto";

      enableBodyScroll(overlayRef.current);
    }
    return clearAllBodyScrollLocks();
  }, [showImageDetail]);

  return (
    <motion.div
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(49, 72, 94, 0.62)",
        backdropFilter: "blur(74px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& .swiper": {
          marginTop: "20px",
          width: "75%",
          height: "75%",
          maxWidth: "100%",
          maxHeight: "100vh",
          // CSS Grid/Flexbox bug size workaround
          // @see https://github.com/kenwheeler/slick/issues/982
          minHeight: 0,
          minWidth: 0,
        },
      }}
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={() => closeImage()}
        sx={{
          ...resetButton,
          display: "flex",
          alignItems: "center",
          background: "transparent",
        }}
      >
        <CloseIcon />
        <Themed.p
          sx={{
            marginLeft: "10px",
            fontSize: "21px",
          }}
        >
          Close
        </Themed.p>
      </button>
      <GallerySwipe currentImage={currentImage} imageArray={imageArray} />
    </motion.div>
  );
};

export default FeaturedImageOverlay;
