/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

const TitleContainer = ({ children }) => (
  <div
    sx={{
      gridColumn: "1 / span 2",
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
        <Themed.p
          sx={{
            fontWeight: 700,
            fontSize: "17px",
            textAlign: "left",
            display: "flex",
            alignItems: "flexstart",
            justifyContent: "flexstart",
          }}
        >
          Latest
        </Themed.p>
      </TitleContainer>
      <DescriptionContainer>
        <Themed.p>Watch Tristan perform with the NEC Philharmonia</Themed.p>
      </DescriptionContainer>
    </>
  );
};

export default HomePageVideoSubtitle;
