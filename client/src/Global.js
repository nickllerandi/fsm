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
        width: 90%;
        height: 100%;
        margin: 0 auto;

        .mainbar {
            width: 75%;
            float: left;
        }

        .sidebar {
            width: 25%;
            height: 50rem;
            background: lightgrey;
            float: right;
        }
    }
`;

export default GlobalStyle