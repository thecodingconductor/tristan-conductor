import * as CSS from "csstype";
import { ResponsiveValue } from "styled-system";

const timingValues = [0.1, 0.2, 0.25, 0.3, 0.35];
export interface ThemeTimingIndices {
  modalShowDelay: ResponsiveValue<CSS.Property.TransitionDuration>;
  textInputError: ResponsiveValue<CSS.Property.TransitionDuration>;
  bounce: ResponsiveValue<CSS.Property.TransitionDuration>;
  headerDropdown: ResponsiveValue<CSS.Property.TransitionDuration>;
  modalHide: ResponsiveValue<CSS.Property.TransitionDuration>;
  rotate: ResponsiveValue<CSS.Property.TransitionDuration>;
  color: ResponsiveValue<CSS.Property.TransitionDuration>;
  modalShow: ResponsiveValue<CSS.Property.TransitionDuration>;
  transform: ResponsiveValue<CSS.Property.TransitionDuration>;
  search: ResponsiveValue<CSS.Property.TransitionDuration>;
  opacity: ResponsiveValue<CSS.Property.TransitionDuration>;
}

const timing = {
  modalShowDelay: timingValues[0],
  textInputError: timingValues[0],
  bounce: timingValues[1],
  headerDropdown: timingValues[1],
  modalHide: timingValues[1],
  rotate: timingValues[1],
  color: timingValues[2],
  modalShow: timingValues[2],
  transform: timingValues[2],
  search: timingValues[3],
  opacity: timingValues[4],
};

export default timing;
