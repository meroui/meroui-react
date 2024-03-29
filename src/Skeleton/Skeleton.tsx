/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
// import clsx from 'clsx';


export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  /**
 * The background color of skeleton.
 * @default '#0000001c'
 */
  backgroundColor?: string | undefined;
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation?: 'pulse' | 'wave' | 'shimmer' | false;
  /**
   * Optional children to infer width and height from.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the Skeleton component.
   */
  className?: string;
  /**
   * Height of the skeleton in pixels. eg: 100px, 100%, 50vw.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height?: string;
  /**
   * The type of content that will be rendered.
   * @default 'rectangular'
   */
  variant: 'rectangular' | 'rounded' | 'circular';
  /**
   * Width of the skeleton. eg: 100px, 100%, 50vw.
   * Takes full width of element by default just like divs. 
   */
  width?: string;
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  animationDuration?: '100ms' | '250ms' | '500ms' | '1s' | '2s' | string;

}


/**
 * Skeleton component for loading screens. SSR by default.
 */
const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { width, height, variant, animation, children, className, animationDuration, backgroundColor, ...other } = props;

  // const keyFrameClassName = animation === false ? "none" : animation


  const mborderRadius = variant == "circular" ? "50%" : variant == "rounded" ? "10%" : variant === "rectangular" ? "2px" : "0px";
  // const animationFrame = keyFrameClassName == "wave" ? `${keyFrameClassName} 2s linear 0.5s infinite` : keyFrameClassName == "pulse" ? `${keyFrameClassName} 2s ease-in-out 0.5s infinite normal none running` : keyFrameClassName == "shimmer" ? `${keyFrameClassName} 2s infinite linear` : ``;


  /**
   * Styling for pulse effects in skeleton. 
   * */
  const pulseSkeletonStyle = css`
      display: block;
      background-color: #0000001c;
      border-radius: ${mborderRadius};
      position: relative;
      mask-image: -webkit-radial-gradient(center, white, black);
      height: ${height ?? "90px"};
      width: ${width ?? "100%"};
      overflow: hidden;
      animation: pulse 2s ease-in-out 0.5s infinite;
        
      @keyframes pulse {
        0% {
          opacity: 1;
      }
      50% {
        opacity: 0.4;
    }
      100% {
        opacity: 1;
      }
    }
  `
  /** 
  * Styling for wave effects in skeleton. 
  */
  const waveSkeletonStyle = css`
    display: block;
    border-radius: ${mborderRadius};
    height: ${height ?? "90px"};
    width: ${width ?? "100%"};
    position: relative;
    overflow: hidden;
    background-color: ${backgroundColor ?? "#0000001c"}; 
    &::before{
      content: "";
    }

    &::after {
      -webkit-animation: wave 2s linear 0.5s infinite;
      animation: wave 2s linear 0.5s infinite;
      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
      content: '';
      position: absolute;
      -webkit-transform: translateX(-100%);
      -moz-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      transform: translateX(-100%);
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
  }
    }
    @keyframes wave {
      0% {
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        transform: translateX(-100%);
    }
    
    50% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        transform: translateX(100%);
    }
    100% {
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        transform: translateX(100%);
      }
    }
    `
  /** 
  * Styling for shimmer effects in skeleton. 
  */
  const shimmerSkeletonStyle = css`
  display: block;
    border-radius: ${mborderRadius};
    height: ${height ?? "90px"};
    width: ${width ?? "100%"};
    position: relative;
    overflow: hidden;
    background-color: ${backgroundColor ?? "#0000001c"}; 

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
      animation: shimmer 2s infinite linear;
    }
    @keyframes shimmer {
      100% {
        left: 100%;
      }
    }
  `

  return (
    <span
      css={animation == "pulse" ? pulseSkeletonStyle : animation == "wave" ? waveSkeletonStyle : animation === "shimmer" ? shimmerSkeletonStyle : " "}
      {...other}
    >
      {children}
    </span>
  )
};

export default Skeleton;



