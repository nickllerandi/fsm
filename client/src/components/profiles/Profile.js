import React, {Component} from "react";
import {connect} from "react-redux";

// Actions
import {getProfile} from "../../actions/profileActions";

class Profile extends Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.id);
    }

    render() {
        if (this.props.profileReducer.profile === null) return "User has not yet completed their profile";

        const {displayName, location, bio, website} = this.props.profileReducer.profile;

        return (
            <div className="Profile">
                <p>{displayName}</p>
                <p>{location}</p>
                <p>{bio}</p>
                <p>{website}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profileReducer: state.profileReducer
});

export default connect(mapStateToProps, {getProfile})(Profile);
