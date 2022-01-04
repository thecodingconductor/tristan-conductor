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
      gridColumn: ["1 / span 5", null, "1 / span 16"],
      display: ["flex", null, "grid"],
      gridGap: [null, null, "20px"],
      gridTemplateColumns: [null, null, "repeat(16, 1fr)"],
      gridRowStart: "1",
      flexDirection: ["row", null, null],
      marginTop: "40px",
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
