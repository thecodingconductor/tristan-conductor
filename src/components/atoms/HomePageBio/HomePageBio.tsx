/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";

const propTypesShape = {
  bioText: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const bioContainerStyles = {
  gridColumn: ["1 / span 5", null, "1 / span 16"],
};

const HomePageBio = ({ bioText }: Props) => {
  return (
    <div
      sx={{
        ...bioContainerStyles,
      }}
    >
      <Themed.p>{bioText}</Themed.p>
    </div>
  );
};

export default HomePageBio;
