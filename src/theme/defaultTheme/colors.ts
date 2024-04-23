import colors from "../utils/colors";

type colorsInsideType = {
  [key: string]: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
    [key: string]: string;
  };
};
export const defaultThemeColors: colorsInsideType = {
  primary: {
    main: colors.blue[500],
    light: "#42a5f5",
    dark: colors.blue[600],
    contrastText: "#fff",
    buttonHover: colors.blue[50],
    solidRippleBgColor: "#fff",
    outlinedRippleBgColor: colors.blue[400],
  },
  secondary: {
    main: colors.purple[600],
    light: colors.purple[100],
    dark: colors.purple[700],
    contrastText: "#fff",
    buttonHover: colors.purple[50],
    solidRippleBgColor: colors.white,
    outlinedRippleBgColor: colors.purple[400],
  },
  success: {
    main: colors.green[600],
    light: colors.green[100],
    dark: colors.green[700],
    contrastText: "#fff",
    buttonHover: colors.green[50],
    solidRippleBgColor: colors.white,
    outlinedRippleBgColor: colors.green[400],
  },
  warning: {
    main: colors.orange[600],
    light: colors.orange[100],
    dark: colors.orange[700],
    contrastText: "#fff",
    buttonHover: colors.orange[50],
    solidRippleBgColor: colors.gray[100],
    outlinedRippleBgColor: colors.orange[300],
  },
  danger: {
    main: colors.red[600],
    light: colors.red[100],
    dark: colors.red[700],
    contrastText: "#fff",
    buttonHover: colors.red[50],
    solidRippleBgColor: colors.white,
    outlinedRippleBgColor: colors.red[300],
  },
  info: {
    main: colors.red[600],
    light: colors.red[100],
    dark: colors.red[700],
    contrastText: "#fff",
    buttonHover: colors.red[50],
    solidRippleBgColor: colors.white,
    outlinedRippleBgColor: colors.red[300],
  },
  vercelBlack: {
    main: "#1976d2",
    light: "#64b5f6",
    dark: "#2196f3",
    contrastText: "#fff",
  },
};
