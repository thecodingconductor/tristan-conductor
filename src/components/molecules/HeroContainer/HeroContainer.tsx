/** @jsx jsx */
import { jsx } from "theme-ui";
import * as PropTypes from "prop-types";
import HeadlineHero from "../../atoms/HeadlineHero/HeadlineHero";

const propTypesShape = {
  heroHeadline: PropTypes.string.isRequired,
  headerElement: PropTypes.element.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const heroContainerStyles = {
  display: "flex",

  width: "100%",
  height: "300px",
  gridColumn: ["1 / span 5", null, "1 / span 16"],
  // flexDirection: "column",
};

const HeroContainer = ({ heroHeadline, headerElement }: Props) => {
  return (
    <div
      sx={{
        ...heroContainerStyles,
        flexDirection: ["column", null, "row"],
      }}
    >
      {headerElement}
      <HeadlineHero heroHeadline={heroHeadline} />
    </div>
  );
};

export default HeroContainer;
