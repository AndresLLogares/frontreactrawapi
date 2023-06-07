import { createGlobalStyle, css } from "styled-components";

const fontFaces = css`
  @font-face {
    font-family: "Roboto Mono", monospace;
    src: url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
    font-weight: 300;
  }
  @font-face {
    font-family: "Poppins", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
    font-weight: 300;
  }
`;
const GlobalStyle = createGlobalStyle`
 ${fontFaces}
`;
export default GlobalStyle;
