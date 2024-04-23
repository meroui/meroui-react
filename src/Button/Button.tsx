/** @jsxImportSource @emotion/react */
/** @jsxRuntime automatic */
"use client";

import * as React from 'react'
import type { ButtonProps } from './ButtonProps'
import { css } from '@emotion/react';
import { useTheme } from '../theme/core';
import {
  generateButtonBGColorbyVariant, generateButtonBorderRadius, generateButtonPaddingandFontSize,
  generateButtonHoverColor, generateButtonRippleColor
} from './ButtonUtils';
import colors from '../theme/utils/colors';
import styled from '@emotion/styled';
import Ripple from '../utils/Ripple/Ripple';
import "@fontsource/roboto";


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(inProps, ref) {
  const theme = useTheme();

  const { children,
    color = "primary",
    disabled = false,
    endIcon,
    rounded = "sm",
    loading = false,
    loadingIcon,
    size = "md",
    startIcon,
    tabIndex,
    disableRipple = false,
    disableCaptialize = false,
    variant = "solid",
    ...others
  } = inProps;


  const generatedRippleColor = generateButtonRippleColor({ variant: variant, color: color, mode: theme.colorScheme })
  const buttongeneratedBgColor = generateButtonBGColorbyVariant({ color: color, mode: theme.colorScheme, variant: variant })
  const generatedHoverColor = generateButtonHoverColor({ color: color, mode: theme.colorScheme, variant: variant })
  const borderValue = `1px solid ${buttongeneratedBgColor}`

  // className="bg-blue-500 hidden sm:block hover:bg-blue-600 text-sm sm:text-base font-[roboto] text-white rounded-md px-3 sm:px-4 py-1"


  const TextButtonStyle = css`
      position: relative;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      font-weight: 500;
      letter-spacing: 0.02857em;
      text-transform: ${disableCaptialize ? "none" : "uppercase"};
      background: transparent;
      font-family: Roboto;
      border-radius: ${generateButtonBorderRadius({ rounded: rounded ?? "sm" })};
      color: ${buttongeneratedBgColor};
      border:none;
      /* Size styles */
    ${generateButtonPaddingandFontSize({ size: size })};
      
      &:hover {
        background-color: ${generatedHoverColor};
        color: ${buttongeneratedBgColor};
      }
      &:disabled {
          color: ${colors.gray[200]};
          cursor: not-allowed;
      }
      &:active {
        background: ;
        
      }
    
    `

  const OutlinedButtonStyle = css`
    position: relative;
    border: ${borderValue};
    overflow: hidden;
    display: flex;
    font-weight: 500;
    letter-spacing: 0.02857em;
    text-transform:  ${disableCaptialize ? "none" : "uppercase"};;
    font-family: Roboto;
    align-items: center; 
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: ${generateButtonBorderRadius({ rounded: rounded ?? "sm" })};
    color: ${buttongeneratedBgColor};
    font-size: 0.875rem;
    
    text-transform: uppercase;
    ${generateButtonPaddingandFontSize({ size: size })};
    background-color: transparent;
    &:hover {
          background-color: ${generatedHoverColor};
          color: ${buttongeneratedBgColor};
  };
      &:disabled {
          background-color: ${colors.gray[200]};
          cursor: not-allowed;
          border: none;
      }
      &:active {
        ${disableRipple && "transform: scale(.98);"}
       
      }
    `

  const solidButtonStyle = css`
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border: none;
      display: flex;
      letter-spacing: 0.02857em;
      text-transform:  ${disableCaptialize ? "none" : "uppercase"};
      font-family: Roboto;
      align-items: center; 
      border-radius: ${generateButtonBorderRadius({ rounded: rounded ?? "sm" })};
      color: white;
      ${generateButtonPaddingandFontSize({ size: size })};
      background-color: ${buttongeneratedBgColor};
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      &:hover {
            background-color: ${generatedHoverColor};
      }
      &:active {
        ${disableRipple && "transform: scale(.98);"}
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      }
      
      &:disabled {
          background-color: ${colors.gray[200]};
          color: ${colors.gray[400]};
          cursor: not-allowed;
          border: none;
      }
     
  `;


  const ButtonStartIcon = styled.span`
    display: inherit;
    ${children && "margin-right: 6px; "}
    ${children && "margin-left: -4px; "}
`;

  const ButtonEndIcon = styled.span`
    display: inherit;
    ${children && "margin-right: -4px;"}
    ${children && "margin-left: 6px;"} 
`;

  // Rendering start icon conditionally
  const MyStartIcon = () => {
    return (
      <ButtonStartIcon>
        {startIcon}
      </ButtonStartIcon>
    )
  }

  const MyEndIcon = () => {
    return (
      <ButtonEndIcon>
        {endIcon}
      </ButtonEndIcon>
    )
  }

  return (

    <button className={`MeroUiButtonRoot ${inProps.className}`}
      ref={ref} {...others} disabled={disabled} tabIndex={disabled ? -1 : (tabIndex)}
      css={variant == "outlined" ? OutlinedButtonStyle : variant == "solid" ? solidButtonStyle : TextButtonStyle}
    >
      {startIcon && <MyStartIcon />}
      {children}
      {!disableRipple && <Ripple color={generatedRippleColor}
        duration={400} />}
      {endIcon && <MyEndIcon />}
    </button>
  )
})

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}
export default Button;

{/* <Ripple color={"#1fecf9"} duration={4000} /> */ }
