import breakpoints from "../theme/breakpoints";
import colors from "../theme/colors";
import mediaQueries from "../theme/media-queries";
import space from "../theme/spacing";
import timing from "../theme/timing";
import zIndices from "../theme/z-index";
import { base } from "@theme-ui/presets";

export default {
  ...base,
  breakpoints,
  space,
  colors,
  zIndices,
  mediaQueries,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
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
  styles: {
    ...base.styles,
    h1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "heading",
      padding: 0,
      margin: 0,
    },
    h2: {
      fonts: "heading",
      fontWeight: "heading",
      padding: 0,
      margin: 0,
      color: "text",
    },
    p: {
      fonts: "body",
      fontWeight: "body",
      color: "text",
    },
  },
};
