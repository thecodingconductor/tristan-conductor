/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

const titleStyles = {
  gridColumn: "1 ",
};

const descriptionStyles = {
  gridColumn: ["3 / span 3", null, "6"],
};

const HomePageVideoSubtitle = () => {
  return (
    <>
      <div
        sx={{
          ...titleStyles,
        }}
      >
        <Themed.h2>Latest</Themed.h2>
      </div>
      <div
        sx={{
          ...descriptionStyles,
        }}
      >
        <Themed.h2>Watch Tristan perform with the NEC Philharmonia</Themed.h2>
      </div>
    </>
  );
};

export default HomePageVideoSubtitle;
