/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useContext, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import HeroContainer from "../components/molecules/HeroContainer/HeroContainer";
import HomePageVideo from "../components/atoms/HomePageVideo/HomePageVideo";
import HomePageVideoSubtitle from "../components/atoms/HomePageVideoSubtitle/HomePageVideoSubtitle";
import Divider from "../components/atoms/Divider/Divider";

import HomePageBio from "../components/atoms/HomePageBio/HomePageBio";
import HomePageSocial from "../components/molecules/HomePageSocial/HomePageSocial";
// import InstaCarousel from "../components/molecules/InstaCarousel/InstaCarousel";
import HomePageNewsContainer from "../components/molecules/HomePageNewsContainer/HomePageNewsContainer";

import HeaderComponent from "../components/atoms/HeaderComponent/HeaderComponent";
// import DesktopInstaModule from "../components/molecules/DesktopInstaModule/DesktopInstaModule";

import GlobalContext from "../context/global/globalContext";

// markup
const IndexPage = ({ location }: any) => {
  const globalContext = useContext(GlobalContext);

  const {
    closeMenu,
    openMenu,
    isSideNavVisible,
    isOpen,
    showSideNav,
    hideSideNav,
  } = globalContext!.menu;

  const { currentPage, setCurrentPage } = globalContext!.currentPage;

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

      # allInstagramContent(limit: 5, sort: { fields: timestamp, order: DESC }) {
      #   edges {
      #     node {
      #       username
      #       timestamp
      #       id
      #       permalink
      #       thumbnail_url
      #       localImage {
      #         childImageSharp {
      #           gatsbyImageData(aspectRatio: 1, layout: CONSTRAINED)
      #         }
      #       }
      #       media_url
      #       caption
      #     }
      #   }
      # }

      # allInstaNode(limit: 3, sort: { fields: timestamp, order: DESC }) {
      #   edges {
      #     node {
      #       localFile {
      #         childImageSharp {
      #           gatsbyImageData(aspectRatio: 1, height: 368)
      #         }
      #       }
      #       timestamp
      #       caption
      #       username
      #       id
      #     }
      #   }
      # }

      allContentfulNewsStory(
        limit: 2
        sort: { fields: newsDate, order: DESC }
      ) {
        edges {
          node {
            contentful_id
            newsTitle
            newsDate(formatString: "MM.DD.YYYY")
            newsLink
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

      allContentfulSocialMedia {
        edges {
          node {
            type
            url
          }
        }
      }
    }
  `);

  useEffect(() => {
    setCurrentPage!(location.pathname);
  }, []);

  useEffect(() => {
    isOpen && closeMenu!();
    hideSideNav!();
  }, []);

  return (
    <>
      <HeroContainer
        heroHeadline={data.allContentfulHeaderBio.edges[0].node.text}
        headerElement={
          <HeaderComponent
            closeMenu={closeMenu!}
            openMenu={openMenu!}
            isSideNavVisible={isSideNavVisible}
            isOpen={isOpen}
            showSideNav={showSideNav!}
            hideSideNav={hideSideNav!}
          />
        }
      />
      <HomePageVideo
        videoSrcURL={data.allContentfulVideos.edges[2].node.videoUrl}
        videoTitle={data.allContentfulVideos.edges[2].node.videoTitle}
      />

      <HomePageVideoSubtitle
        videoURL={data.allContentfulVideos.edges[2].node.videoUrl}
      />
      <Divider />
      <HomePageNewsContainer newsItems={data.allContentfulNewsStory.edges} />
      <Divider />
      <HomePageBio
        bioText={data.allContentfulHomepageBioExcerpt.edges[0].node.text.text}
      />
      <Divider />
      <HomePageSocial socialIcons={data.allContentfulSocialMedia.edges} />
      {/* {isSmall ? (
        <InstaCarousel instaPosts={data.allInstaNode.edges} />
      ) : (
        <DesktopInstaModule instaPosts={data.allInstaNode.edges} />
      )} */}
    </>
  );
};

export default IndexPage;
