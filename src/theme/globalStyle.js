import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'avenir';
  }
  a {
    text-decoration: none;
    color: #7a5dce;
    color: #017878;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  .subheading {
    font-style: italic;
    margin-top: -20px;
  }
`