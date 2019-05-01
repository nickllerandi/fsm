import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import {elevation} from './utils'

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    * {
        margin: 0;
        padding: 0;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    body {
        padding: 90px 0 0;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .App {
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
            float: right;
        }
    }

    .ad {
        padding: 1rem;
        margin: 1rem;
        height: 11rem;
        width: 15rem;
        border: 1px solid #d6d9dc; 
        ${elevation[1]};
    }
`;

export default GlobalStyle