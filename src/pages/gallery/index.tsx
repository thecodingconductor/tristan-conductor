/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useState, useContext, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Button from "../../components/atoms/Button/Button";
import GalleryGrid from "../../components/molecules/GalleryGrid/GalleryGrid";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";
import { resetButton } from "../../lib/utils/mixins";
import GalleryButton from "../../components/atoms/GalleryButton/GalleryButton";
import GlobalContext from "../../context/global/globalContext";
const dummyGridImages = [
  {
    src: "../../images/tristan-portrait 1.jpg",
    alt: "Tristan Portrait",
    height: 368,
    width: 368,
  },
  {
    src: "../../images/tristan-portrait 1.jpg",
    alt: "Tristan Portrait",
    height: 368,
    width: 368,
  },
  {
    src: "../../images/tristan-portrait 1.jpg",
    alt: "Tristan Portrait",
    height: 368,
    width: 368,
  },
  {
    src: "../../images/tristan-portrait 1.jpg",
    alt: "Tristan Portrait",
    height: 368,
    width: 368,
  },
  {
    src: "../../images/tristan-portrait 1.jpg",
    alt: "Tristan Portrait",
    height: 368,
    width: 368,
  },
  {
    src: "../../images/tristan-portrait 1.jpg",
    alt: "Tristan Portrait",
    height: 368,
    width: 368,
  },
];

const Gallery = (props) => {
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
                width: 368
                height: 368
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
          }
        }
      }
    }
  `);

  console.log(props);

  return (
    <Layout>
      <GlobalContext.Consumer>
        {({ menu, gallery }) => {
          const {
            closeMenu,
            openMenu,
            isSideNavVisible,
            isOpen,
            showSideNav,
            hideSideNav,
          } = menu;

          const { changeMediaType, gridMediaType } = gallery;

          return (
            <>
              <HeaderComponent
                margin={50}
                closeMenu={closeMenu}
                openMenu={openMenu}
                isSideNavVisible={isSideNavVisible}
                isOpen={isOpen}
                showSideNav={showSideNav}
                hideSideNav={hideSideNav}
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
                  borderBottom: "1px solid rgba(255,255,255, 0.13)",
                }}
              >
                <GalleryButton
                  label={"Photo"}
                  changeMediaType={changeMediaType}
                  gridMediaType={gridMediaType}
                />
                <GalleryButton
                  label={"Video"}
                  changeMediaType={changeMediaType}
                  gridMediaType={gridMediaType}
                />
              </div>

              <GalleryGrid
                photoItemsArray={data.allContentfulImageGallery.edges}
                videoItemsArray={data.allContentfulVideos.edges}
              />

              <Button
                label={"Download Press Kit"}
                onClick={() => console.log("download press kit")}
                isParent
              />
            </>
          );
        }}
      </GlobalContext.Consumer>
    </Layout>
  );
};

export default Gallery;
