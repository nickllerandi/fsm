import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import {elevation} from './utils'

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
            float: right;

            .ad {
                padding: 1rem;
                margin: 1rem;
                height: 11rem;
                border: 1px solid #d6d9dc; 
                ${elevation[1]};
            }
        }
    }
`;

export default GlobalStyle