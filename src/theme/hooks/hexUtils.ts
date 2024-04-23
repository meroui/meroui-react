/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
export function hexToRgb (color: any): string {
  color = color.slice(1)

  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g')
  let colors = color.match(re)

  if (colors && colors[0].length === 1) {
    colors = colors.map((n: any) => n + n)
  }

  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
        .map((n: string, index: number) => {
          return index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1000) / 1000
        })
        .join(', ')})`
    : ''
}

export function intToHex (int: { toString: (arg0: number) => any }) {
  const hex = int.toString(16)
  return hex.length === 1 ? `0${hex}` : hex
}
