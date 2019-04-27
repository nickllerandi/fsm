import styled from 'styled-components'
import {black, lighterblack, blue} from '../utils'

export const Card = styled.div`    
    padding: 12px 8px;
    border-bottom: 1px solid ${lighterblack};

    a {
        text-decoration: none;
        color: ${black};
    }

    a:hover {
        color: ${blue}
    }
`;