import * as CSS from "csstype";
import { ResponsiveValue } from "styled-system";

const zIndexValues = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export interface ThemeZIndices {
  dropdownItems: ResponsiveValue<CSS.Property.ZIndex>;
  filters: ResponsiveValue<CSS.Property.ZIndex>;
  flyoutModalContent: ResponsiveValue<CSS.Property.ZIndex>;
  flyoutModalHeader: ResponsiveValue<CSS.Property.ZIndex>;
  header: ResponsiveValue<CSS.Property.ZIndex>;
  headerSkipNavigation: ResponsiveValue<CSS.Property.ZIndex>;
  modalClose: ResponsiveValue<CSS.Property.ZIndex>;
  overlay: ResponsiveValue<CSS.Property.ZIndex>;
  quickShop: ResponsiveValue<CSS.Property.ZIndex>;
  stickyNav: ResponsiveValue<CSS.Property.ZIndex>;
  twoUpProductFeature: ResponsiveValue<CSS.Property.ZIndex>;
  swiperButton: ResponsiveValue<CSS.Property.ZIndex>;
  customFocusRing: ResponsiveValue<CSS.Property.ZIndex>;
}

const zIndices = {
  dropdownItems: zIndexValues[1],
  header: zIndexValues[1],
  headerSkipNavigation: zIndexValues[1],
  quickShop: zIndexValues[1],
  twoUpProductFeature: zIndexValues[1],
  modalClose: zIndexValues[1],
  overlay: zIndexValues[1],
  filters: zIndexValues[2],
  flyoutModalContent: zIndexValues[2],
  stickyNav: zIndexValues[2],
  flyoutModalHeader: zIndexValues[3],
  swiperButton: zIndexValues[1],
  customFocusRing: zIndexValues[1],
};

export default zIndices;
