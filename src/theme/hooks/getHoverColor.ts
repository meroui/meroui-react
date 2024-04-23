

export default function generateHoverBackgroundColor(color: string): string {
    // Convert the color code to RGB components
    const hexToRgb = (hex: string): number[] => {
      const r = parseInt(hex.substring(1, 3), 16);
      const g = parseInt(hex.substring(3, 5), 16);
      const b = parseInt(hex.substring(5, 7), 16);
      return [r, g, b];
    };
  
    // Convert RGB components to HSL
    const rgbToHsl = (r: number, g: number, b: number): number[] => {
      r /= 255, g /= 255, b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h = 0, s, l = (max + min) / 2;
  
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
  
      return [h, s, l];
    };
  
    // Convert HSL to lighter version for hover effect
    const lightenHsl = (h: number, s: number, l: number): string => {
      l += 0.35; // Increase lightness by 20%
      if (l > 1) l = 1; // Ensure lightness doesn't exceed 100%
      return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    };
  
    // Generate hover background color
    const [r, g, b] = hexToRgb(color);
    const [h, s, l] = rgbToHsl(r, g, b);
    return lightenHsl(h, s, l);
  }