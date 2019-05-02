import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import styled from 'styled-components'
import {darken} from 'polished'

// REDUX ACTIONS
import {logoutUser} from "../../actions/authActions";
import {clearCurrentProfile} from "../../actions/profileActions";

// ASSETS
import fsmLogo from '../../img/fsm-green2.png'
import mag from '../../img/sprite.svg'

// UTILS
import {Button} from '../../elements'
import {primary, lighterblack} from '../../utils'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            search__input: ""
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    };

    render() {
        const {isAuthenticated} = this.props.authReducer;
        const {user} = this.props.authReducer;

        const outState = (
            <nav className='user-nav'>
                <div className='user-nav__login'>
                    <Link to="/login">Login</Link>
                </div>
                <div className='user-nav__register'>
                    <Link to="/register">
                        <Button.SignUp>
                            Sign Up
                        </Button.SignUp>
                    </Link>
                </div>
            </nav>
        );

        const inState = (
            <nav className='user-nav'>
                <div className='user-nav__user-name'>
                    <Link to={`/users/${user.id}/${user.name}`}>
                        {user.name}
                    </Link>
                </div>
                <div className='user-nav__logout'>
                    <Link to="#" onClick={this.onLogoutClick}>
                        Logout
                    </Link>
                </div>
            </nav>
        );


        return (
            <NavbarStyled>
                <Link to="/">
                    <img 
                        src={fsmLogo} 
                        className="logo"
                        alt="Full Stack Musician"
                    />
                </Link>
                <form action='#' className='search'>
                    <input
                        className='search__input'
                        type="text"
                        name="search__input"
                        placeholder="Search"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <button classNmae='search__button'>
                        <svg className='search__icon'>
                            <use xlinkHref={`${mag}#icon-magnifying-glass`} />
                        </svg>
                    </button>
                </form>
                {isAuthenticated ? inState : outState}
            </NavbarStyled>
        )
    }
}
const NavbarStyled = styled.header`
    height: 9rem;
    background-color: ${lighterblack};
    border-bottom: 1px solid ${primary};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        height: 3.25rem;
        margin-left: 3rem;
    }

    .search {
        background-color: orangered;
        flex: 0 0 40%;

        &__input {
            font-family: inherit;
            font-size: inherit;
            background-color: ${lighterblack};
            border: none;
            color: inherit;
            padding: .7rem 2rem;
            border-radius: 100px;
            width: 90%;
            transition: all .2s;
            margin-right: -3.5rem;

            &:focus {
                outline: none;
                width: 100%;
                background-color: ${darken(0.09, lighterblack)};
            }
        }

        &__button {
            border: none;
            background-color: ${lighterblack};

            &:focus {
                outline: none;
            }

            &:active {
                transform: translateY(2px);
            }
        }

        &__icon {
            height: 2rem;
            width: 2rem;
        }
    }

    .user-nav {
        background-color: greenyellow;
    }
`;

const mapStateToProps = state => ({
    authReducer: state.authReducer
});

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Navbar);