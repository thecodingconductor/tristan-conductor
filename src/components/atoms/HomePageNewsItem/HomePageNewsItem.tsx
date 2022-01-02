/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";

const propTypesShape = {
  newsDate: PropTypes.string.isRequired,
  newsTitle: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const DescriptionContainer = ({ children }) => (
  <div
    sx={{
      gridColumn: ["3 / span 3", null, "6"],
    }}
  >
    {children}
  </div>
);

const DateContainer = ({ children }) => (
  <div
    sx={{
      gridColumn: "1",
    }}
  >
    {children}
  </div>
);

const HomePageNewsItem = ({ newsDate, newsTitle }: Props) => {
  return (
    <>
      <DateContainer>
        <Themed.h2>{newsDate}</Themed.h2>
      </DateContainer>
      <DescriptionContainer>
        <Themed.h2>{newsTitle}</Themed.h2>
      </DescriptionContainer>
    </>
  );
};

export default HomePageNewsItem;
