function clamp (
    val: number,
    min: number = Number.MIN_SAFE_INTEGER,
    max: number = Number.MAX_SAFE_INTEGER
  ): number {
    return Math.max(min, Math.min(val, max))
  }
  
  export default clamp
  
  
/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
export function clampWrapper (value: any, min: number = 0, max: number = 1): number {
    if (process.env.NODE_ENV !== 'production') {
      if (value < min || value > max) {
        console.error(
          `MUI: The value provided ${value} is out of range [${min}, ${max}].`
        )
      }
    }
  
    return clamp(value, min, max)
  }