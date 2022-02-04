/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { FC } from "react";

type Props = {
  videoURL: string;
};

const TitleContainer: FC = ({ children }) => (
  <div
    sx={{
      gridColumn: "1 / span 2",
      my: "100px",
    }}
  >
    {children}
  </div>
);

const DescriptionContainer: FC = ({ children }) => (
  <div
    sx={{
      gridColumn: ["3 / span 3", null, "6 / span 7"],
      my: "100px",
    }}
  >
    {children}
  </div>
);

const HomePageVideoSubtitle = ({ videoURL }: Props) => {
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
        <Themed.a href={videoURL}>
          Watch Tristan perform with the NEC Philharmonia
        </Themed.a>
      </DescriptionContainer>
    </>
  );
};

export default HomePageVideoSubtitle;
