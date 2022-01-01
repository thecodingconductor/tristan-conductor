/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";

const propTypesShape = {
  newsDate: PropTypes.string.isRequired,
  newsTitle: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const titleStyles = {
  gridColumn: "1 ",
};

const descriptionStyles = {
  gridColumn: ["3 / span 3", null, "6"],
};

const HomePageNewsItem = ({ newsDate, newsTitle }: Props) => {
  return (
    <>
      <div
        sx={{
          ...titleStyles,
        }}
      >
        <Themed.h2>{newsDate}</Themed.h2>
      </div>
      <div
        sx={{
          ...descriptionStyles,
        }}
      >
        <Themed.h2>{newsTitle}</Themed.h2>
      </div>
    </>
  );
};

export default HomePageNewsItem;
