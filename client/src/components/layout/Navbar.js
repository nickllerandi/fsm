import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {logoutUser} from "../../actions/authActions";
import {clearCurrentProfile} from "../../actions/profileActions";

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
            <div>
                <Link to="/login">Login</Link> -
                <Link to="/register">Signup</Link>
            </div>
        );

        const inState = (
            <div>
                <Link to={`/users/${user.id}/${user.name}`}>
                    {user.name}
                </Link>
                <button onClick={this.onLogoutClick}>
                    Logout
                </button>
            </div>
        );


        return (
            <nav className="Navbar">
                <Link to="/">FSM</Link> - Search -
                <Link to="/tags">Tags</Link>
                {isAuthenticated ? inState : outState}
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
});

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Navbar);