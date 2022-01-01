/** @jsx jsx */
import { jsx } from "theme-ui";
// import React from "react";
import * as PropTypes from "prop-types";

import { Themed } from "theme-ui";

const propTypesShape = {
  // String with the site headline
  heroHeadline: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const headerStyles = {
  fontFamily: "heading",
  color: "white",
  gridColumns: ["1 / span 5", null, "5 / span auto"],
};

const HeadlineHero = ({ heroHeadline }: Props) => {
  return (
    <div>
      <Themed.h1 sx={{ ...headerStyles }}>{heroHeadline}</Themed.h1>
    </div>
  );
};

export default HeadlineHero;
