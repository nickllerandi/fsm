import styled from 'styled-components'
import {darken} from 'polished'
import {blue, elevation} from '../utils'

export const Button = styled.button`
    padding: 5px 20px;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
    border: none;
    background: ${blue};
    cursor: pointer;
    ${elevation[1]};
    transition: 0.3s ease all;

    &:hover {
        ${elevation[2]};
        background: ${darken(0.2, blue)};
    }
`;

export const CancelButton = styled(Button)`
    background: tomato;
`;