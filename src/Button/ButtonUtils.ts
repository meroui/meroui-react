"use client";
import { useTheme } from "../theme/core";

type colorType = {
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "other";
  mode: "dark" | "light";
  variant: "solid" | "outlined" | "text";
};

type buttonSizeType = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};

type buttonBorderRadiusType = {
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

export const generateButtonBorderRadius = ({
  rounded,
}: buttonBorderRadiusType) => {
  switch (rounded) {
    case "none":
      return "0px;";
    case "sm":
      return "0.125rem;";
    case "md":
      return "0.375rem;";
    case "lg":
      return "0.5rem;";
    case "xl":
      return "0.75rem;";
    case "2xl":
      return "1rem;";
    case "full":
      return "9999px;";
    default:
      return "0.375rem;";
  }
};

export const generateButtonPaddingandFontSize = ({ size }: buttonSizeType) => {
  switch (size) {
    case "sm":
      return "padding:7px 14px; font-size: 12px";
    case "md":
      return "padding: 8px 18px; font-size: 14px";
    case "lg":
      return "padding:10px 22px; font-size: 18px";
    case "xl":
      return "padding:12px 24px; font-size: 20px";
    case "2xl":
      return "padding: 14px 28px; font-size: 22px";
    default:
      return "padding: 8px 16px; font-size: 24px";
  }
};

export const generateFontSize = ({ size }: buttonSizeType) => {};

export const lightenColor = (color: string, amount: number): string => {
  // Parse the color string into RGB components
  const hexToRgb = (hex: string): number[] =>
    hex.match(/[A-Za-z0-9]{2}/g)!.map((v) => parseInt(v, 16));

  const rgb = hexToRgb(color);

  // Calculate the relative luminance of the color
  const luminance =
    (0.2126 * rgb[0]) / 255 + (0.7152 * rgb[1]) / 255 + (0.0722 * rgb[2]) / 255;

  // Calculate the lighter RGB components based on the luminance and amount
  const lightenedRgb = rgb.map((c) =>
    Math.round(c + (255 - c) * amount * (1 - luminance))
  );

  // Convert the lightened RGB values back to a hex color string
  const lightenedHex = lightenedRgb
    .map((c) => Math.round(c).toString(16).padStart(2, "0"))
    .join("");

  return `#${lightenedHex}`;
};

export const darkenColor = (color: string, amount: number): string => {
  // Parse the color string into RGB components
  const hexToRgb = (hex: string): number[] =>
    hex.match(/[A-Za-z0-9]{2}/g)!.map((v) => parseInt(v, 16));

  const rgb = hexToRgb(color);
  // Darken each RGB component by the specified amount
  const darkenedRgb = rgb.map((c) => Math.max(0, c - amount * 255));

  // Convert the darkened RGB values back to a hex color string
  const darkenedHex = darkenedRgb
    .map((c) => Math.round(c).toString(16).padStart(2, "0"))
    .join("");

  return `#${darkenedHex}`;
};

export function generateButtonBGColorbyVariant({
  color,
  mode,
  variant,
}: colorType): any {
  const theme = useTheme(); // Use the useTheme hook to access the theme context

  // Logic to generate color value by variant
  switch (variant) {
    case "solid":
      return theme.palette?.colors?.[color]?.main ?? "red";
    case "outlined":
      return theme.palette?.colors?.[color]?.main ?? "red";
    case "text":
      return theme.palette?.colors?.[color]?.main ?? "red";
    default:
      return "yellow";
  }
}

export function generateButtonHoverColor({
  color,
  variant,
  mode,
}: {
  color: string;
  variant: string;
  mode: string;
}) {
  const theme = useTheme(); // Use the useTheme hook to access the theme context

  switch (variant) {
    case "solid":
      return theme.palette?.colors?.[color]?.dark ?? "red";
    case "outlined":
      return theme.palette?.colors?.[color]?.buttonHover ?? "red";
    case "text":
      return theme.palette?.colors?.[color]?.buttonHover ?? "red";
    default:
      return "yellow";
  }
}

export function generateButtonRippleColor({
  color,
  variant,
  mode,
}: {
  color: string;
  variant: string;
  mode: string;
}) {
  const theme = useTheme(); // Use the useTheme hook to access the theme context
  switch (variant) {
    case "solid":
      return theme.palette?.colors?.[color]?.solidRippleBgColor ?? "red";
    case "outlined":
      return theme.palette?.colors?.[color]?.outlinedRippleBgColor ?? "red";
    case "text":
      return theme.palette?.colors?.[color]?.outlinedRippleBgColor ?? "red";
    default:
      return "yellow";
  }
}
