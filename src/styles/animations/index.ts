import { css, keyframes } from "styled-components";

export const AnimationLoader = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const AnimationSlideIn = css`
  @-webkit-keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const AnimationSlideOut = css`
  @-webkit-keyframes scale-out-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
  }
  @keyframes scale-out-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
  }
`;
