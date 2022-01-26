/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../../components/atoms/Button/Button";
import AboutQuoteBlock from "../../components/atoms/AboutQuoteBlock/AboutQuoteBlock";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";
import MobileAboutSpacer from "../../components/atoms/MobileAboutSpacer/MobileAboutSpacer";
import useBreakpoints from "../../lib/hooks/useBreakpoints";
import HomePageBio from "../../components/atoms/HomePageBio/HomePageBio";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { resetLink } from "../../lib/utils/mixins";
import AboutBodyBlock from "../../components/atoms/AboutBodyBlock/AboutBodyBlock";

import GlobalContext from "../../context/global/globalContext";

const dummyAboutText = {
  bio1: `Driven by the mission to create the future of classical music through unconventional and innovative means, Tristan has been building audiences on digital platforms such as Twitch, and exploring the possibilities of combining classical music with interactive mediums. His aim is nothing less than to blaze a new path for the future of classical music—one that is exciting, inclusive, and engaging. 
  He is the recipient of the Friedlander Family Presidential Scholarship, and is the inaugural Artist Diploma in Orchestral Conducting at New England Conservatory.`,
  quote1: `Conducting is not just about keeping time or being clear. It’s about cultivating a positive energy in a room. It’s about making space for artists to create. `,
  quote2: `All art–no matter the time, medium, style, or complexity–stems from the same stream: the human creative impulse. Eradicate boundaries from your perception and get to the essence. `,
};

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
  } = globalContext.menu;

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
    }
  `);

  const image = getImage(
    data.allContentfulAboutPageBackground.edges[0].node.image.gatsbyImageData
  );

  useEffect(() => {
    isOpen && closeMenu();

    hideSideNav();
  }, []);

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
      {!isLarge && <MobileAboutSpacer />}
      <AboutBodyBlock
        bioText={dummyAboutText.bio1}
        rowStart={!isLarge ? 3 : 2}
      />
      <AboutQuoteBlock
        quoteText={dummyAboutText.quote1}
        rowStart={!isLarge ? 4 : 3}
      />
      <AboutBodyBlock
        bioText={dummyAboutText.bio1}
        rowStart={!isLarge ? 5 : 4}
      />
      <AboutQuoteBlock
        quoteText={dummyAboutText.quote1}
        rowStart={!isLarge ? 6 : 5}
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
      <div
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -3,
        }}
      >
        <div
          sx={{
            position: "relative",
          }}
        >
          <GatsbyImage
            image={image}
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
      </div>
    </>
  );
};

export default About;
