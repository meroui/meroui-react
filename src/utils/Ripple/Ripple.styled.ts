import styled from "@emotion/styled";

interface RippleContainerProps {
  duration?: number;
  color?: string;
}

export const RippleContainer = styled.span<RippleContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    z-index: 0;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: 900ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
