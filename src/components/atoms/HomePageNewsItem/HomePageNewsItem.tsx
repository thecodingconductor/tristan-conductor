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
      gridColumn: "1 / span 2",
    }}
  >
    {children}
  </div>
);

const HomePageNewsItem = ({ newsDate, newsTitle }: Props) => {
  return (
    <>
      <DateContainer>
        <Themed.p>{newsDate}</Themed.p>
      </DateContainer>
      <DescriptionContainer>
        <Themed.p>{newsTitle}</Themed.p>
      </DescriptionContainer>
    </>
  );
};

export default HomePageNewsItem;
