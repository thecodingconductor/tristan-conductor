/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import HeroContainer from "../components/molecules/HeroContainer/HeroContainer";
import HomePageVideo from "../components/atoms/HomePageVideo/HomePageVideo";
import HomePageVideoSubtitle from "../components/atoms/HomePageVideoSubtitle/HomePageVideoSubtitle";
import Divider from "../components/atoms/Divider/Divider";
import HomePageNewsItem from "../components/atoms/HomePageNewsItem/HomePageNewsItem";
import HomePageBio from "../components/atoms/HomePageBio/HomePageBio";
import HomePageSocial from "../components/molecules/HomePageSocial/HomePageSocial";
import InstaCarousel from "../components/molecules/InstaCarousel/InstaCarousel";
import Image from "gatsby-image";
import HomePageNewsContainer from "../components/molecules/HomePageNewsContainer/HomePageNewsContainer";
import useBreakpoints from "../lib/hooks/useBreakpoints";
import HeaderComponent from "../components/atoms/HeaderComponent/HeaderComponent";
import DesktopInstaModule from "../components/molecules/DesktopInstaModule/DesktopInstaModule";
import { motion } from "framer-motion";

const dummySocialMedia = [
  {
    url: "https://www.twitter.com/tristanconducts",
    type: "twitter",
  },
  {
    url: "https://www.instagram.com/tristanrais",
    type: "instagram",
  },
  {
    url: "https://www.twitch.tv/orchestraobsessed",
    type: "twitch",
  },
];

// markup
const IndexPage = (props) => {
  const { isSmall } = useBreakpoints();
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeaderBio {
        edges {
          node {
            text
          }
        }
      }
      allContentfulHomepageBioExcerpt {
        edges {
          node {
            text {
              text
            }
          }
        }
      }

      allInstagramContent(limit: 5, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            username
            timestamp
            id
            permalink
            thumbnail_url
            localImage {
              absolutePath
            }
            media_url
            caption
          }
        }
      }
      allContentfulNewsStory(
        limit: 2
        sort: { fields: newsDate, order: DESC }
      ) {
        edges {
          node {
            contentful_id
            newsTitle
            newsDate(formatString: "MM.DD.YYYY")
          }
        }
      }
    }
  `);

  const videoURL = "https://www.youtube.com/embed/wct93OnrrYA";

  return (
    <Layout>
      <HeroContainer
        heroHeadline={data.allContentfulHeaderBio.edges[0].node.text}
        headerElement={<HeaderComponent />}
      />
      <HomePageVideo
        videoSrcURL={videoURL}
        videoTitle={
          "Tristan Rais-Sherman, Mozart Symphony. 29, NEC Philharmonia"
        }
      />
      <HomePageVideoSubtitle videoURL={videoURL} />
      <Divider />
      <HomePageNewsContainer newsItems={data.allContentfulNewsStory.edges} />
      <Divider />
      <HomePageBio
        bioText={data.allContentfulHomepageBioExcerpt.edges[0].node.text.text}
      />
      <Divider />
      <HomePageSocial socialIcons={dummySocialMedia} />
      {isSmall ? (
        <InstaCarousel
          instaPosts={data.allInstagramContent.edges.slice(0, 3)}
        />
      ) : (
        <DesktopInstaModule
          instaPosts={data.allInstagramContent.edges.slice(0, 3)}
        />
      )}
    </Layout>
  );
};

export default IndexPage;
