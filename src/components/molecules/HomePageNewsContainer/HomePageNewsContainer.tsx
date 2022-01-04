/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import HomePageNewsItem from "../../atoms/HomePageNewsItem/HomePageNewsItem";
import { resetLink } from "../../../lib/utils/mixins";
import { Link } from "gatsby";

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
        gridColumn: ["1 / span 5", null, "1 / span 12"],
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
      }}
    >
      {newsItems.map((newsItem, index) => {
        return (
          <HomePageNewsItem
            newsDate={newsItem.node.newsDate}
            newsTitle={newsItem.node.newsTitle}
            isFirst={index === 0}
            key={newsItem.node.newsDate}
          />
        );
      })}

      <Link
        to="/news"
        sx={{
          ...resetLink,
          fontFamily: "Inter, sans-serif",
          marginTop: "70px",
          gridColumn: ["3 / span 2", null, "6 / span 7"],
          textDecoration: "underline",
        }}
      >
        All News
      </Link>
    </div>
  );
};

export default HomePageNewsContainer;
