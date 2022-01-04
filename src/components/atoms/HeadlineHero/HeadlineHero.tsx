/** @jsx jsx */
import { jsx } from "theme-ui";
import * as PropTypes from "prop-types";

import { Themed } from "theme-ui";

const propTypesShape = {
  // String with the site headline
  heroHeadline: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

// This needs help.

const HeadlineHero = ({ heroHeadline }: Props) => {
  return (
    <div
      sx={{
        marginBottom: "40px",
        gridColumn: [null, null, "5 / span 11"],
        gridRowStart: "1",
      }}
    >
      <Themed.h1
        sx={{
          fontFamily: "heading",
          fontWeight: "heading",
          fontSize: "28px",
          lineHeight: "heading",
          color: "white",
        }}
      >
        {heroHeadline}
      </Themed.h1>
    </div>
  );
};

export default HeadlineHero;
