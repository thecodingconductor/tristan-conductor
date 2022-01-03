/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import HomePageNewsItem from "../../atoms/HomePageNewsItem/HomePageNewsItem";
import { resetLink } from "../../../lib/utils/mixins";

const propTypesShape = {
  // Array of NewsItem Components
  newsItems: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        contentful_id: PropTypes.string.isRequired,
        newsDate: PropTypes.string.isRequired,
        newsTitle: PropTypes.string.isRequired,
      }),
    })
  ),
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HomePageNewsContainer = ({ newsItems }: Props) => {
  const arrLength = newsItems.length - 1;
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "1 / span 16"],
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(16, 1fr)"],
      }}
    >
      {newsItems.map((newsItem, index) => {
        return (
          <HomePageNewsItem
            newsDate={newsItem.node.newsDate}
            newsTitle={newsItem.node.newsTitle}
            isFirst={index === 0}
          />
        );
      })}

      <a
        href="#"
        sx={{
          ...resetLink,
          fontFamily: "Inter, sans-serif",
          marginTop: "70px",
          gridColumn: "3 / span 2",
          textDecoration: "underline",
        }}
      >
        All News
      </a>
    </div>
  );
};

export default HomePageNewsContainer;
