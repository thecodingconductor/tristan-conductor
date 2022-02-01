/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useState, useContext, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Button from "../../components/atoms/Button/Button";
import GalleryGrid from "../../components/molecules/GalleryGrid/GalleryGrid";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";
import { resetButton } from "../../lib/utils/mixins";
import GalleryButton from "../../components/atoms/GalleryButton/GalleryButton";
import GlobalContext from "../../context/global/globalContext";
import FeaturedImageOverlay from "../../components/molecules/FeaturedImageOverlay/FeaturedImageOverlay";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { AnimatePresence, motion } from "framer-motion";

const Gallery = () => {
  const globalContext = useContext(GlobalContext);
  const {
    closeMenu,
    openMenu,
    isSideNavVisible,
    isOpen,
    showSideNav,
    hideSideNav,
  } = globalContext!.menu;

  const {
    setPhoto,
    setVideo,
    gridMediaType,
    showImageDetail,
    selectImage,
    closeImage,
    currentImage,
  } = globalContext!.gallery;

  const data = useStaticQuery(graphql`
    query {
      allContentfulImageGallery {
        edges {
          node {
            alt
            image {
              gatsbyImageData(
                aspectRatio: 1
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
      allContentfulVideos {
        edges {
          node {
            videoTitle
            videoUrl
            videoDate(formatString: "YYYY.MM.DD")
            videoLocation
          }
        }
      }
    }
  `);

  const ref = useRef(null);

  useEffect(() => {
    isOpen && closeMenu!();
    hideSideNav!();

    if (typeof window === "undefined") return;
    const gatsbyDiv = document.getElementById("gatsby-focus-wrapper");

    if (showImageDetail) {
      gatsbyDiv!.style.height = "100%";
      document.documentElement.style.overflow = "hidden";
      disableBodyScroll(ref.current);
    } else {
      gatsbyDiv!.style.height = "auto";
      document.documentElement.style.overflow = "auto";

      enableBodyScroll(ref.current);
    }
    return clearAllBodyScrollLocks();
  }, [showImageDetail]);

  return (
    <>
      <HeaderComponent
        margin={50}
        closeMenu={closeMenu!}
        openMenu={openMenu!}
        isSideNavVisible={isSideNavVisible}
        isOpen={isOpen}
        showSideNav={showSideNav!}
        hideSideNav={hideSideNav!}
      />
      <div
        sx={{
          position: "absolute",
          top: "200px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          // borderBottom: "1px solid rgba(255,255,255, 0.13)",
        }}
        ref={ref}
      >
        <GalleryButton
          label={"Photo"}
          setPhoto={setPhoto!}
          setVideo={setVideo!}
          gridMediaType={gridMediaType}
        />
        <GalleryButton
          label={"Video"}
          setPhoto={setPhoto!}
          setVideo={setVideo!}
          gridMediaType={gridMediaType}
        />
      </div>

      <GalleryGrid
        photoItemsArray={data.allContentfulImageGallery.edges}
        videoItemsArray={data.allContentfulVideos.edges}
        gridMediaType={gridMediaType}
        showImageDetail={showImageDetail}
        selectImage={selectImage!}
        closeImage={closeImage!}
      />

      {/* <Button
        label={"Download Press Kit"}
        onClick={() => console.log("download press kit")}
        isParent
      /> */}
      <AnimatePresence>
        {currentImage && (
          <FeaturedImageOverlay
            showImageDetail={showImageDetail}
            closeImage={closeImage!}
            currentImage={currentImage}
            imageArray={data.allContentfulImageGallery.edges}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
