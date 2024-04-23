import { clampWrapper } from "./clamp";
import { decomposeColor, recomposeColor } from "./composeColor";

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function darken (
    color: { type: string | string[]; values: number[] },
    coefficient: number
  ) {
    color = decomposeColor(color)
    coefficient = clampWrapper(coefficient)
  
    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient
    } else if (
      color.type.indexOf('rgb') !== -1 ||
      color.type.indexOf('color') !== -1
    ) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient
      }
    }
    return recomposeColor(color)
  }
  export function private_safeDarken (color: any, coefficient: any, warning: any) {
    try {
      return darken(color, coefficient)
    } catch (error) {
      if (warning && process.env.NODE_ENV !== 'production') {
        console.warn(warning)
      }
      return color
    }
  }


  export function hslToRgb (color: { type?: any; values?: any }) {
    color = decomposeColor(color)
    const { values } = color
    const h = values[0]
    const s = values[1] / 100
    const l = values[2] / 100
    const a = s * Math.min(l, 1 - l)
    const f = (n: number, k = (n + h / 30) % 12) =>
      l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
  
    let type = 'rgb'
    const rgb = [
      Math.round(f(0) * 255),
      Math.round(f(8) * 255),
      Math.round(f(4) * 255)
    ]
  
    if (color.type === 'hsla') {
      type += 'a'
      rgb.push(values[3])
    }
  
    return recomposeColor({ type, values: rgb })
  }
  