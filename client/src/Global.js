import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 90px 0 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a:link, a:visited {
        text-decoration: none;
        list-style: none;
        color: inherit;
    }
`;

export default GlobalStyle