import * as CSS from "csstype";
import { ResponsiveValue } from "styled-system";

export interface ThemeSpacing {
  size0: ResponsiveValue<CSS.Property.Margin>;
  size4: ResponsiveValue<CSS.Property.Margin>;
  size8: ResponsiveValue<CSS.Property.Margin>;
  size12: ResponsiveValue<CSS.Property.Margin>;
  size16: ResponsiveValue<CSS.Property.Margin>;
  size20: ResponsiveValue<CSS.Property.Margin>;
  size24: ResponsiveValue<CSS.Property.Margin>;
  size32: ResponsiveValue<CSS.Property.Margin>;
  size40: ResponsiveValue<CSS.Property.Margin>;
  size48: ResponsiveValue<CSS.Property.Margin>;
  size64: ResponsiveValue<CSS.Property.Margin>;
  size96: ResponsiveValue<CSS.Property.Margin>;
  size128: ResponsiveValue<CSS.Property.Margin>;
  size160: ResponsiveValue<CSS.Property.Margin>;
}

const spacing: ThemeSpacing = {
  size0: "0px",
  size4: "4px",
  size8: "8px",
  size12: "12px",
  size16: "16px",
  size20: "20px",
  size24: "24px",
  size32: "32px",
  size40: "40px",
  size48: "48px",
  size64: "64px",
  size96: "96px",
  size128: "128px",
  size160: "160px",
};

export const spacingKeys = Object.keys(spacing);

export default spacing;
