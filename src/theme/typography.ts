import {
  RequiredTheme,
  ResponsiveValue,
  Theme,
  TypographyProps,
  variant,
} from "styled-system";

export type TypeStyle =
  | "header1"
  | "header2"
  | "header3"
  | "header4"
  | "body1"
  | "body2"
  | "body3"
  | "link";

const defaultTypeStyles = {
  fontDisplay: "swap",
  fontFamily: "AktivGrotesk, sans-serif",
  fontStyle: "normal",
  fontWeight: "normal",
  margin: 0,
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
};

type TypeStyleDataType = TypographyProps & { textDecoration?: string };
export const typeStyleData: { [T in TypeStyle]: TypeStyleDataType } = {
  header1: {
    ...defaultTypeStyles,
    fontSize: [28, null, 40],
    lineHeight: [40 / 28, null, 54 / 40],
  },
  header2: {
    ...defaultTypeStyles,
    fontSize: [21, null, 28],
    lineHeight: [30 / 21, null, 40 / 28],
  },
  header3: {
    ...defaultTypeStyles,
    fontSize: [18, null, 21],
    lineHeight: [28 / 18, null, 30 / 21],
  },
  header4: {
    ...defaultTypeStyles,
    fontSize: [16, null, 18],
    lineHeight: [24 / 16, null, 28 / 18],
  },
  body1: {
    ...defaultTypeStyles,
    fontSize: [13, null, 14],
    lineHeight: [22 / 13, null, 24 / 14],
  },
  body2: {
    ...defaultTypeStyles,
    fontSize: [11, null, 12],
    lineHeight: [18 / 11, null, 20 / 12],
  },
  body3: {
    ...defaultTypeStyles,
    fontSize: [9, null, 10],
    lineHeight: [14 / 9, null, 15 / 10],
  },
  link: {
    ...defaultTypeStyles,
    fontSize: [13, null, 14],
    lineHeight: [22 / 13, null, 24 / 14],
    textDecoration: "underline",
  },
};

export const typeStyle = variant({
  prop: "typeStyle",
  variants: typeStyleData,
});

export interface TypeStyleProps<ThemeType extends Theme = RequiredTheme> {
  typeStyle?: ResponsiveValue<TypeStyle, ThemeType> | undefined;
}
