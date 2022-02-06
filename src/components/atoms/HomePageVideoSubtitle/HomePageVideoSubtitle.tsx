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
      my: ["size50", null, "size80"],
    }}
  >
    {children}
  </div>
);

const DescriptionContainer: FC = ({ children }) => (
  <div
    sx={{
      gridColumn: ["3 / span 3", null, "6 / span 7"],
      mt: ["size50", null, "size80"],
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
        <Themed.a
          href={videoURL}
          sx={{
            fontSize: ["24px", null, "34px"],
            lineHeight: ["36px", null, "51px"],
          }}
        >
          Watch Tristan perform with the NEC Philharmonia
        </Themed.a>
      </DescriptionContainer>
    </>
  );
};

export default HomePageVideoSubtitle;
