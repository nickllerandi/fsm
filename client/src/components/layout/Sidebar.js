import React from 'react';
import {Link} from 'react-router-dom'

// ASSETS
import sprites from '../../img/sprite.svg'

const Sidebar = () => {
    return (
        <ul className='side-nav'>
            <li className='side-nav__item'>
                <Link to='/'>
                    <svg className='side-nav__icon'>
                        <use xlinkHref={`${sprites}#icon-home`} />
                    </svg>
                    <span>Home</span>
                </Link>
            </li>
            <li className='side-nav__item'>
                <Link to='/'>
                    <svg className='side-nav__icon'>
                        <use xlinkHref={`${sprites}#icon-price-tag`} />
                    </svg>
                    <span>Tags</span>
                </Link>
            </li>
            <li className='side-nav__item'>
                <Link to='/'>
                    <svg className='side-nav__icon'>
                        <use xlinkHref={`${sprites}#icon-slideshare`} />
                    </svg>
                    <span>Users</span>
                </Link>
            </li>
        </ul>
    );
}

export default Sidebar;