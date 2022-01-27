/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../../components/atoms/Button/Button";
import AboutQuoteBlock from "../../components/atoms/AboutQuoteBlock/AboutQuoteBlock";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";
import MobileAboutSpacer from "../../components/atoms/MobileAboutSpacer/MobileAboutSpacer";
import useBreakpoints from "../../lib/hooks/useBreakpoints";

import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { resetLink } from "../../lib/utils/mixins";
import AboutBodyBlock from "../../components/atoms/AboutBodyBlock/AboutBodyBlock";

import GlobalContext from "../../context/global/globalContext";

import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  const { isLarge } = useBreakpoints();

  const globalContext = useContext(GlobalContext);

  const {
    closeMenu,
    openMenu,
    isSideNavVisible,
    isOpen,
    showSideNav,
    hideSideNav,
  } = globalContext!.menu;

  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutPageBackground {
        edges {
          node {
            image {
              gatsbyImageData
              description
            }
          }
        }
      }
      allContentfulAboutPage {
        edges {
          node {
            id
            paragraph1 {
              paragraph1
            }
            paragraph2 {
              paragraph2
            }
            paragraph3 {
              paragraph3
            }
            quote1 {
              quote1
            }
            quote2 {
              quote2
            }
          }
        }
      }
    }
  `);

  const image = getImage(
    data.allContentfulAboutPageBackground.edges[0].node.image.gatsbyImageData
  );

  useEffect(() => {
    isOpen && closeMenu!();

    hideSideNav!();
  }, []);

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
      {!isLarge && <MobileAboutSpacer />}
      <AboutBodyBlock
        bioText={
          data.allContentfulAboutPage.edges[0].node.paragraph1.paragraph1
        }
        rowStart={!isLarge ? 3 : 2}
      />
      <AboutQuoteBlock
        quoteText={data.allContentfulAboutPage.edges[0].node.quote1.quote1}
        rowStart={!isLarge ? 4 : 3}
      />
      <AboutBodyBlock
        bioText={
          data.allContentfulAboutPage.edges[0].node.paragraph2.paragraph2
        }
        rowStart={!isLarge ? 5 : 4}
      />
      <AboutQuoteBlock
        quoteText={data.allContentfulAboutPage.edges[0].node.quote2.quote2}
        rowStart={!isLarge ? 6 : 5}
      />
      <AboutBodyBlock
        bioText={
          data.allContentfulAboutPage.edges[0].node.paragraph3.paragraph3
        }
        rowStart={!isLarge ? 7 : 6}
      />

      {/* Button */}
      <Link
        to="/events"
        sx={{
          ...resetLink,
          gridColumn: ["1 / span 5", null, "1 / span 12"],
        }}
      >
        <Button
          onClick={() => console.log("This is the button")}
          label={"View Season"}
        />
      </Link>
      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -3,
          }}
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 500 }}
          transition={{ duration: 2 }}
        >
          <div
            sx={{
              position: "relative",
            }}
          >
            <GatsbyImage
              image={image!}
              alt="testImage"
              sx={{
                position: "relative",
              }}
            />
            <div
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "450px",
                zIndex: 2,
                background: `rgba(11, 28, 44, 0)
          linear-gradient(
              to bottom,
              rgba(11, 28, 44, 0) 0%,
              rgb(11, 28, 44) 80%
          )
          repeat scroll 0 0;`,
              }}
            ></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default About;
