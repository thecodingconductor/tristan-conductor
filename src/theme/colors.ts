import * as CSS from "csstype";
import { ResponsiveValue } from "styled-system";

export interface ThemeColors {
  text: ResponsiveValue<CSS.Property.Color>;
  alert: ResponsiveValue<CSS.Property.Color>;
  black: ResponsiveValue<CSS.Property.Color>;
  blackT10: ResponsiveValue<CSS.Property.Color>;
  blackT30: ResponsiveValue<CSS.Property.Color>;
  error: ResponsiveValue<CSS.Property.Color>;
  grey: ResponsiveValue<CSS.Property.Color>;
  greyDark: ResponsiveValue<CSS.Property.Color>;
  greyLight: ResponsiveValue<CSS.Property.Color>;
  greyLightest: ResponsiveValue<CSS.Property.Color>;
  greyMedium: ResponsiveValue<CSS.Property.Color>;
  success: ResponsiveValue<CSS.Property.Color>;
  white: ResponsiveValue<CSS.Property.Color>;
  yellow: ResponsiveValue<CSS.Property.Color>;
  yellowDark: ResponsiveValue<CSS.Property.Color>;
  yellowLight: ResponsiveValue<CSS.Property.Color>;
  yellowMedium: ResponsiveValue<CSS.Property.Color>;
}

const colors: ThemeColors = {
  text: "#FFFFFF",
  alert: "#8C2C2F",
  black: "#333333",
  blackT10: "rgba(51, 51, 51, 0.1)",
  blackT30: "rgba(51, 51, 51, 0.3)",
  error: "#D02E2E",
  grey: "#C6C6C6",
  greyDark: "#5A5A5A",
  greyLight: "#EDEDED",
  greyLightest: "#F8F8F8",
  greyMedium: "#727272",
  success: "#23873F",
  white: "#FFFFFF",
  yellow: "#FAE27F",
  yellowDark: "#FFB455",
  yellowLight: "#F5EAC6",
  yellowMedium: "#FFCD45",
};

export const colorKeys = Object.keys(colors);

export default colors;
