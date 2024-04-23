type borderValueType = {
  xs?: { value: string };
  sm?: { value: string };
  md?: { value: string };
  lg?: { value: string };
  xl?: { value: string };
};

type ButtonBaseStyleType = {
  backgroundColor: string;
  lightHoverColor: string;
  darkHoverColor: string;
  textColor: string;
  shadowColor: string;
  borderRadius: string;
  iconColor: string;
  defaultPaddingX: string;
  defaultPaddingY: string;
  disabledColor: string;
  activeColor: string;
  hoverColor: string;
};

type colorsInsideType = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;

  [key: string]: string;
};

export interface MeroThemeProps {
  colorScheme: "light" | "dark";
  borders?: {
    solidBorders?: borderValueType;
    dashedBorders?: borderValueType;
    dottedBorders?: borderValueType;
    // Add more border properties as needed
  };
  componentsConfig?: {
    Button?: {
      variants: {
        solid: ButtonBaseStyleType;
        outlined: ButtonBaseStyleType;
        text: ButtonBaseStyleType;
        [key: string]: ButtonBaseStyleType;
      };
    };
  };
  palette?: {
    colors?: {
      primary?: colorsInsideType;
      secondary?: colorsInsideType;
      success?: colorsInsideType;
      warning?: colorsInsideType;
      error?: colorsInsideType;
      info?: colorsInsideType;
      [key: string]: colorsInsideType | undefined;
    };
  };

  typography?: {
    fontFamily?: string;
    fontSize?: string;
  };
}
