/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useState, useContext, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Button from "../../components/atoms/Button/Button";
import GalleryGrid from "../../components/molecules/GalleryGrid/GalleryGrid";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";

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
    }
  `);

  // console.log(data.allContentfulImageGallery.edges);

  return (
    <Layout>
      <HeaderComponent margin={50} />
      <div
        sx={{
          position: "absolute",
          top: "200px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          "::before, ::after": {
            content: '""',
            flex: 1,
            borderBottom: "1px solid rgba(255,255,255, 0.13)",
          },
        }}
      >
        <Themed.h2>Photo</Themed.h2>
        <Themed.h2>Video</Themed.h2>

        {/* <span
          sx={{
            padding: "0 10px",
          }}
        >
          <Themed.h2
            sx={{
              display: "inline-block",
            }}
          >
            Photo
          </Themed.h2>
        </span>
        <span
          sx={{
            padding: "0 10px",
          }}
        >
          <Themed.h2>Video</Themed.h2> */}
        {/* </span> */}
      </div>
      <GalleryGrid mediaItemsArray={data.allContentfulImageGallery.edges} />
      <Button
        label={"Download Press Kit"}
        onClick={() => console.log("download press kit")}
        isParent
      />
    </Layout>
  );
};

export default Gallery;
