/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import { defaultFullWidthGridChild } from "../../../lib/utils/mixins";

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
        ...defaultFullWidthGridChild,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <Themed.p
          sx={{
            fontFamily: "quote",
            fontSize: "128px",
          }}
        >
          "
        </Themed.p>
      </div>
      <div>
        <Themed.p>{quoteText}</Themed.p>
      </div>
      <div>
        <Themed.p>-Tristan</Themed.p>
      </div>
    </div>
  );
};

export default AboutQuoteBlock;
