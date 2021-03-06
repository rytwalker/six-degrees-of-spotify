import { green, neutral, yellow, red } from "./colors";
import { primaryFont, headingFont, typeScale } from "./typography";

export const light = {
  bodyColor: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
};

export const dark = {
  bodyColor: neutral[600],
  textColor: neutral[100],
  textColorInverted: neutral[600],
};

export const defaultTheme = {
  primaryColor: green[300],
  primaryColorHover: green[200],
  primaryColorActive: green[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  bodyColor: neutral[600],
  primaryFont,
  headingFont,
  typeScale,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
