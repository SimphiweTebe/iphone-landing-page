import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', sans-serif;
  overflow-x: hidden;
  line-height: 1.5;
  font-weight: 300;
}

// variables
:root {
  --dark: #000;
  --greyLight: #d2d2d7;
  --white: #fff;
  --blue: #0071e3;

  --textSizeXLG: 5.6rem;
  --textSizeLG: 4.8rem;
  --textSizeMD: 4rem;
  --textSizeSM: 2rem;
}

`