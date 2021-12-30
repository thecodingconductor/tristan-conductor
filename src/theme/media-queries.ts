import breakpoints from "./breakpoints";

const mediaQueries = {
  md: `@media screen and (min-width: ${breakpoints[0]})`,
  lg: `@media screen and (min-width: ${breakpoints[1]})`,
};

export default mediaQueries;
