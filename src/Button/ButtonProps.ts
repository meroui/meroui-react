import * as React from "react";

type buttonSizeType = {
  size: "sm" | "md" | "lg" | "xl" | "2xl";
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of button you want to use. Supports outlined , solid and text.
   * @default 'solid'
   */
  variant?: "solid" | "outlined" | "text";

  /**
   * The children element of the button.
   */
  children?: React.ReactNode;
  /**
   * The variant of button you want to use. Supports outlined , solid and text.
   * @default 'solid'
   */
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";

  /**
   * The size of the button.
   * @default 'md'
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";

  /**
   * The starting icon of the button.
   */
  startIcon?: React.ReactNode;

  /**
   * The ending icon of the button.
   */
  endIcon?: React.ReactNode;

  /**
   *  Handles the disabled state of button and defaults to false
   *  @default false
   */
  disabled?: boolean;
  /**
   *  Disable capitalized button texts. Defaults to false
   *  @default false
   */
  disableCaptialize?: boolean;
  /**
   * Handles the loading state of button.
   * @default false
   */
  loading?: boolean;

  /**
   * The ending icon of the button.
   */
  loadingIcon?: React.ReactNode;

  /**
   * Handle the onClick event of the button.This is required argument.
   */
  onClick: () => void;

  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

  /**
   * @default 0
   */
  tabIndex?: NonNullable<React.HTMLAttributes<any>["tabIndex"]>;

  disableRipple: boolean;
}
