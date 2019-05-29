import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

// ASSETS
import sprites from '../../img/sprite.svg'

// UTILS
import {white} from '../../utils'

const Sidebar = () => {
    return (
        <SidebarStyled>
            <ul className='side-nav'>
                <li className='side-nav__item'>
                    <Link to='/' className='side-nav__link'>
                        <svg className='side-nav__icon'>
                            <use xlinkHref={`${sprites}#icon-home`} />
                        </svg>
                        <span>Home</span>
                    </Link>
                </li>
                <li className='side-nav__item'>
                    <Link to='/' className='side-nav__link'>
                        <svg className='side-nav__icon'>
                            <use xlinkHref={`${sprites}#icon-price-tag`} />
                        </svg>
                        <span>Tags</span>
                    </Link>
                </li>
                <li className='side-nav__item'>
                    <Link to='/' className='side-nav__link'>
                        <svg className='side-nav__icon'>
                            <use xlinkHref={`${sprites}#icon-slideshare`} />
                        </svg>
                        <span>Users</span>
                    </Link>
                </li>
            </ul>
        
            <div className='legal'>
                &copy; 2019 by Fullstack Musician.
            </div>
        </SidebarStyled>
    );
}

const SidebarStyled = styled.div`   
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .side-nav {
        &__item {

        }

        &__link {

        }

        &__icon {
            width: 1.75rem;
            height: 1.75rem;
        }
    }

    .legal {
        font-size: 1.2rem;
        text-align: center;
        padding: 2.5rem;
        color: ${white};
    }
`

export default Sidebar;