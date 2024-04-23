import { hexToRgb } from "./hexUtils";

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
export function decomposeColor(color: any) {
  // Idempotent
  if (color?.type) {
    return color;
  }

  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf("(");
  const type = color.substring(0, marker);

  // if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
  //   throw new Error(
  //     'MeroUI: Unsupported `%s` color.\n' +
  //       'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().',

  //   )
  // }

  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;

  if (type === "color") {
    values = values.split(" ");
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === "/") {
      values[3] = values[3].slice(1);
    }
    if (
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        colorSpace
      ) === -1
    ) {
      throw new Error(
        "MeroUI: unsupported `%s` color space.\n" +
          "The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.",
        colorSpace
      );
    }
  } else {
    values = values.split(",");
  }
  values = values.map((value: string) => parseFloat(value));

  return { type, values, colorSpace };
}

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
export function recomposeColor(color: {
  type?: any;
  values?: any;
  colorSpace?: any;
}): string {
  const { type, colorSpace } = color;
  let { values } = color;

  if (type.indexOf("rgb") !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n: string, i: number) =>
      i < 3 ? parseInt(n, 10) : n
    );
  } else if (type.indexOf("hsl") !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values = `${colorSpace} ${values.join(" ")}`;
  } else {
    values = `${values.join(", ")}`;
  }

  return `${type}(${values})`;
}
