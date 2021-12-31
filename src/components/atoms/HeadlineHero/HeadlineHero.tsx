/** @jsx jsx */
import { jsx } from "theme-ui";
// import React from "react";
import * as PropTypes from "prop-types";

import { Link, graphql } from "gatsby";

const propTypesShape = {
  // String with the site headline
  heroHeadline: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const headerStyles = {
  fontFamily: "heading",
  backgroundColor: "alert",
};

const HeadlineHero = ({ heroHeadline }: Props) => {
  return (
    <div>
      <h1 sx={{ ...headerStyles }}>{heroHeadline}</h1>
    </div>
  );
};

export default HeadlineHero;
