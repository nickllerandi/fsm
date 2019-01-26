import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <Link to="/">FSM</Link> - Search -
                <Link to="/tags">Tags</Link> -
                <Link to="/login">Login</Link> -
                <Link to="/register">Signup</Link>
            </nav>
        )
    }
}

export default Navbar;