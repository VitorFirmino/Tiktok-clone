import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-@font-face {
    font-family: 'sofiapro';
    src: url('/sofiapro.tff') format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: sofiapro;
  }
`;

export default GlobalStyle;
