import { keyframes } from 'styled-components';

export const glowingAnimation = keyframes`
  0% {
    opacity: 1;
    box-shadow: 0 0 10px #ac89f6;
  }
  50% {
    opacity: 0.9;
    box-shadow: 0 0 20px #ac89f6;
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 10px #ac89f6;
  }
`;

export const glowingText = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }

`;

export const glowingBackground = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
`;

export const orangeTextGradient = `
background: #f12711; /* fallback for old browsers */
background:
  -webkit-linear-gradient(
    to top,
    #f12711,
    #f5af19
  ); /* Chrome 10-25, Safari 5.1-6 */

background:
  linear-gradient(
    to top,
    #f12711,
    #f5af19
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const pinkTextGradient = `
  background: #ec008c; /* fallback for old browsers */
  background:
    -webkit-linear-gradient(
      to top,
      #ec008c,
      #fc6767
    ); /* Chrome 10-25, Safari 5.1-6 */

  background:
    linear-gradient(
      to top,
      #ec008c,
      #fc6767
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
