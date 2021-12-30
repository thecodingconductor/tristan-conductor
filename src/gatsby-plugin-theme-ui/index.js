import breakpoints from "../theme/breakpoints";
import colors from "../theme/colors";
import mediaQueries from "../theme/media-queries";
import space from "../theme/spacing";
import timing from "../theme/timing";
import zIndices from "../theme/z-index";

export default {
  breakpoints,
  space,
  colors,
  zIndices,
  mediaQueries,
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};
