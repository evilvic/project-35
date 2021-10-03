import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${ ({ theme }) => theme.background };
    color: ${ ({ theme }) => theme.text };
  }

  tspan {
    font-family: monospace;
  }

`