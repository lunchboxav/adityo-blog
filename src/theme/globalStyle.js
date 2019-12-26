import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }
  h1, h2 {
    font-family: 'Playfair Display', serif;
    color: #017878;
  }
  p {
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: #7a5dce;
    color: #017878;
    font-style: italic;
    text-decoration: underline;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  .subheading {
    font-style: italic;
    margin-top: -20px;
    margin-bottom: -10px;
  }
`
