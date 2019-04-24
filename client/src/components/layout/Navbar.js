import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import styled from 'styled-components'

import {logoutUser} from "../../actions/authActions";
import {clearCurrentProfile} from "../../actions/profileActions";

import fsmLogo from '../../img/fsm-green2.png'
import {lightblack, green, elevation, fixed} from '../../utils'

class Navbar extends Component {
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    };

    render() {
        const {isAuthenticated} = this.props.authReducer;
        const {user} = this.props.authReducer;

        const outState = (
            <ul>
                <li>
                    <Link to="/login">Login</Link>    
                </li>
                <li>
                    <Link to="/register">Signup</Link>
                </li>
            </ul>
        );

        const inState = (
            <ul>
                <li>
                    <Link to={`/users/${user.id}/${user.name}`}>
                        {user.name}
                    </Link>
                </li>
                <li>
                    <Link to="#" onClick={this.onLogoutClick}>
                        Logout
                    </Link>
                </li>
            </ul>
        );


        return (
            <HeaderNav>
                <div className="container">
                    <div className="main">
                        <Link to="/" className="logo">
                            <img 
                                src={fsmLogo} 
                                className="fsm_logo"
                                alt="Full Stack Musician"
                            />
                        </Link>
                    </div>
                    {isAuthenticated ? inState : outState}
                </div>
            </HeaderNav>
        )
    }
}

const HeaderNav = styled.header`
    min-width: auto;
    ${elevation[1]};
    width: 100%;
    background-color: #fafafb;
    height: 90px;
    border-top: 3px solid ${green};
    ${fixed()};

    .container {
        max-width: 1264px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        .main {
            height: 100%;

            .logo {
                padding: 0 8px;
                height: 100%;
                display: flex;
                align-items: center;
                transition: background-color 
                    cubic-bezier(.165, .84, .44, 1) .25s;

                &:hover {
                    background-color: rgba(239,240,241,0.75);
                }

                .fsm_logo {
                    height: 100%;
                }
            }
        }

        ul {
            height: 100%;
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            padding-left: 48px;
            align-items: center;
            flex-grow: 1;
            justify-content: flex-end;

            li {
                flex-shrink: 0;
                display: inline-flex;
                height: 100%;

                a {
                    color: ${lightblack};
                    display: inline-flex;
                    align-items: center;
                    padding: 0 10px;
                    text-decoration: none;
                    white-space: nowrap;
                    transition: background-color 
                        cubic-bezier(.165, .84, .44, 1) .25s,color cubic-bezier(.165, .84, .44, 1) .25s;

                    &:hover {
                        color: #3b4045;
                        background-color: #eff0f1;
                    }
                }
            }
        }
    }
`;

const mapStateToProps = state => ({
    authReducer: state.authReducer
});

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Navbar);