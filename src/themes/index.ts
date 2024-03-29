import { keyframes } from "@emotion/react"
import { breakpoints } from "./breakpoints"
import { blurs } from "./properties/blurs"
import { borders } from "./properties/border"
import { durations } from "./properties/duration"
import { fontSizes } from "./properties/font-sizes"
import { fontWeights } from "./properties/font-weights"
import { letterSpacings } from "./properties/letter-spacing"
import { lineHeights } from "./properties/line-height"
import { radii } from "./properties/radius"
import { zIndices } from "./properties/z-index"

export const defaultThemeConfig  ={
    preflight: true,
    cssVarsPrefix: "meroui",
    cssVarsRoot: ":where(:root, :host)",
    theme: {
      breakpoints: breakpoints,
      keyframes: keyframes,
      tokens: {
        blurs,
        borders,
        durations,
        fontSizes,
        fontWeights,
        letterSpacings,
        lineHeights,
        radii,
        zIndex: zIndices,
      },
  }

}