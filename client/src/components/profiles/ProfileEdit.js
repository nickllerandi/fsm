import React, {Component} from "react";
import {connect} from "react-redux";

class ProfileEdit extends Component {
    componentDidMount() {
        if (this.props.match.params.id !== this.props.authReducer.user.id) {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div>
                Profile Edit
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
});

export default connect(mapStateToProps)(ProfileEdit);