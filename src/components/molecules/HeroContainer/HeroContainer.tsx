/** @jsx jsx */
import { jsx } from "theme-ui";
import * as PropTypes from "prop-types";
import HeadlineHero from "../../atoms/HeadlineHero/HeadlineHero";

const propTypesShape = {
  heroHeadline: PropTypes.string.isRequired,
  headerElement: PropTypes.element.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const StyledHeroContainer = ({ children }) => (
  <div
    sx={{
      display: "flex",

      width: "100%",
      gridColumn: ["1 / span 5", null, "1 / span 16"],
      flexDirection: ["column", null, "row"],
    }}
  >
    {children}
  </div>
);

const HeroContainer = ({ heroHeadline, headerElement }: Props) => {
  return (
    <StyledHeroContainer>
      {headerElement}
      <HeadlineHero heroHeadline={heroHeadline} />
    </StyledHeroContainer>
  );
};

export default HeroContainer;
