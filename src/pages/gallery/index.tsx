/** @jsx jsx */
import { jsx } from "theme-ui";
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
            height
            width
            alt
            image {
              gatsbyImageData(aspectRatio: 1)
            }
          }
        }
      }
    }
  `);

  console.log(data.allContentfulImageGallery.edges);

  return (
    <Layout>
      <HeaderComponent />
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
