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
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { resetLink } from "../../lib/utils/mixins";

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
      <StaticImage
        src="../../images/tristan-portrait 1.jpg"
        alt="Tristan sitting against brick wall."
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -20,
        }}
      />
      <HomePageBio bioText={dummyAboutText.bio1} />
      <AboutQuoteBlock quoteText={dummyAboutText.quote1} />
      <HomePageBio bioText={dummyAboutText.bio1} />
      <AboutQuoteBlock quoteText={dummyAboutText.quote1} />
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
    </>
  );
};

export default About;
