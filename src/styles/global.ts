import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #caf0f8;
  --red: #E52E4D;
  --blue: #1220bb;
  --green: #57cc99;

  --blue-light: #0081bf;

  --rgb-green: rgb(209 209 209 / 37%);

  --text-title: #8b8b8b;
  --text-body: #565758;
  --shape: #FFFFFF;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html  {
  @media(max-width: 1080px) {
    font-size: 93.7%;
  }

  @media(max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;s
}
[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}


`