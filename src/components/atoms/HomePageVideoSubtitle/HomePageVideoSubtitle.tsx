/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

const TitleContainer = ({ children }) => (
  <div
    sx={{
      gridColumn: "1",
    }}
  >
    {children}
  </div>
);

const DescriptionContainer = ({ children }) => (
  <div
    sx={{
      gridColumn: ["3 / span 3", null, "6"],
    }}
  >
    {children}
  </div>
);

const HomePageVideoSubtitle = () => {
  return (
    <>
      <TitleContainer>
        <Themed.h2>Latest</Themed.h2>
      </TitleContainer>
      <DescriptionContainer>
        <Themed.h2>Watch Tristan perform with the NEC Philharmonia</Themed.h2>
      </DescriptionContainer>
    </>
  );
};

export default HomePageVideoSubtitle;
