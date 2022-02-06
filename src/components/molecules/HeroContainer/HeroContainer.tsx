/** @jsx jsx */
import { jsx } from "theme-ui";
import HeadlineHero from "../../atoms/HeadlineHero/HeadlineHero";

import { FC, ReactElement } from "react";

type Props = {
  heroHeadline: string;
  headerElement: ReactElement;
};

const StyledHeroContainer: FC = ({ children }) => (
  <div
    sx={{
      gridColumn: ["1 / span 5", null, "1 / span 12"],
      display: ["flex", null, "grid"],
      gridGap: [null, null, "20px"],
      gridTemplateColumns: [null, null, "repeat(12, 1fr)"],
      gridRowStart: "1",
      flexDirection: "column",
      my: ["size50", null, "size140"],
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
