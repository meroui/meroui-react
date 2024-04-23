import { clampWrapper } from "./clamp";
import { darken, hslToRgb } from "./colorVisiblityAlter";
import { decomposeColor, recomposeColor } from "./composeColor";

const common = {
    black: '#000',
    white: '#fff'
  }

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function lighten (
    color: { type: string | string[]; values: number[] },
    coefficient: number
  ) {
    color = decomposeColor(color)
    coefficient = clampWrapper(coefficient)
  
    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient
    } else if (color.type.indexOf('rgb') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient
      }
    } else if (color.type.indexOf('color') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (1 - color.values[i]) * coefficient
      }
    }
  
    return recomposeColor(color)
  }

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: common.white,
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212',
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

function addLightOrDark(intent: any, direction: any, shade: any, tonalOffset: any) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}

// function getDefaultPrimary(mode = 'light') {
//   if (mode === 'dark') {
//     return {
//       main: blue[200],
//       light: blue[50],
//       dark: blue[400],
//     };
//   }
//   return {
//     main: blue[700],
//     light: blue[400],
//     dark: blue[800],
//   };
// }

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
export function getLuminance (color: { type: string; values: any }) {
    color = decomposeColor(color)
  
    let rgb =
      color.type === 'hsl' || color.type === 'hsla'
        ? decomposeColor(hslToRgb(color)).values
        : color.values
    rgb = rgb.map((val: number) => {
      if (color.type !== 'color') {
        val /= 255 // normalized
      }
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4
    })
  
    // Truncate at 3 digits
    return Number(
      (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
    )
  }

export function getContrastRatio (foreground: any, background: any) {
    const lumA = getLuminance(foreground)
    const lumB = getLuminance(background)
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05)
  }




function getContrastText (background: any) {
  const contrastText =
    getContrastRatio(background, dark.text.primary) >= 3
      ? dark.text.primary
      : light.text.primary

  if (process.env.NODE_ENV !== 'production') {
    const contrast = getContrastRatio(background, contrastText)
    if (contrast < 3) {
      console.error(
        [
          `MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
          'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
          'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'
        ].join('\n')
      )
    }
  }

  return contrastText
}
type ArgumentColorPropsType = {
  color: any;
  mainShade: number;
  lightShade: number;
  darkShade: number;
  tonalOffset: "light"| "dark";
}


export const augmentColor = (props:  {
  color: any;
  mainShade: number;
  lightShade?: number;
  darkShade?: number;
  tonalOffset: "light"| "dark";
}) => {
  let { color, mainShade = 100, lightShade = 300, darkShade = 200,tonalOffset } = props
  
  color = { ...color };
  if (!color.main && color[mainShade]) {
    color.main = color[mainShade];
  }

  if (!color.hasOwnProperty('main')) {
    throw new Error(
      'MUI: The color%s provided to augmentColor(color) is invalid.\n' +
        'The color object needs to have a `main` property or a `%s` property.',
    );
  }

  if (typeof color.main !== 'string') {
    throw new Error(
      'MeroUI: The color%s provided to augmentColor(color) is invalid.\n' +
        '`color.main` should be a string, but `%s` was provided instead.\n' +
        '\n' +
        'Did you intend to use one of the following approaches?\n' +
        '\n' +
        'import { green } from "@mui/material/colors";\n' +
        '\n' +
        'const theme1 = createTheme({ palette: {\n' +
        '  primary: green,\n' +
        '} });\n' +
        '\n' +
        'const theme2 = createTheme({ palette: {\n' +
        '  primary: { main: green[500] },\n' +
        '} });',
    );
  }

  addLightOrDark(color, 'light', lightShade, tonalOffset);
  addLightOrDark(color, 'dark', darkShade, tonalOffset);
  
  if (!color.contrastText) {
    color.contrastText = getContrastText(color.main);
  }

  return color;
};