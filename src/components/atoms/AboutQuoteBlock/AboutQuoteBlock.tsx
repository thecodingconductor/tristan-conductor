/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";

const propTypesShape = {
  /**
   * Quote Text to be displayed
   */
  quoteText: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const AboutQuoteBlock = ({ quoteText }: Props) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <p
          sx={{
            fontFamily: "quote",
            fontSize: "128px",
          }}
        >
          "
        </p>
      </div>
      <div>
        <p>{quoteText}</p>
      </div>
      <div>
        <p>-Tristan</p>
      </div>
    </div>
  );
};

export default AboutQuoteBlock;
