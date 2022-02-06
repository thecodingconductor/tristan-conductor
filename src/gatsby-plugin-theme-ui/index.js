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
    quote: "Lora, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: "49px",
  },
  fontSizes: [12, 14, 18, 21, 24, 32, 34, 48, 53, 64, 72],
  styles: {
    ...base.styles,
    h1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "heading",
      letterSpacing: "-1px",
      fontSize: [6, null, 8],
      padding: 0,
      margin: 0,
    },
    h2: {
      fonts: "heading",
      fontFamily: "Inter, sans-serif",
      fontWeight: "heading",
      fontSize: 3,
      padding: 0,
      margin: 0,
      color: "white",
    },
    p: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "body",
      color: "text",
      fontSize: [2, null, 3],
      margin: 0,
      lineHeight: "27px",
      padding: 0,
    },
    a: {
      fontFamily: "Inter, sans-serif",
      color: "black",
      fontSize: [2, null, 3],
      lineHeight: "27px",
      textDecoration: "underline",
    },
    root: {
      backgroundColor: "#FFFFFF",
      fonts: "body",
      overflowX: "hidden",
      position: "relative",
    },
  },
};
