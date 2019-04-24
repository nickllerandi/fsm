import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 90px 0 0;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    main {
        max-width: 1264px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
`;

export default GlobalStyle