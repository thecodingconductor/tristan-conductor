/** @jsx jsx */
import { jsx } from "theme-ui";
import * as PropTypes from "prop-types";

import { Themed } from "theme-ui";

const propTypesShape = {
  // String with the site headline
  heroHeadline: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HeadlineHero = ({ heroHeadline }: Props) => {
  return (
    <div
      sx={{
        marginTop: [null, null, "-12px"],
        marginBottom: "40px",
        gridColumn: [null, null, "6 / span 7"],
        gridRowStart: "1",
      }}
    >
      <Themed.h1
        sx={{
          fontFamily: "heading",
          fontWeight: "heading",
          fontSize: ["28px", null, "53px"],
          lineHeight: ["heading", null, "71px"],
        }}
      >
        {heroHeadline}
      </Themed.h1>
    </div>
  );
};

export default HeadlineHero;
