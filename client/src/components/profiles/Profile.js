import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

// Actions
import {getProfile} from "../../actions/profileActions";
import {getUserQuestions} from "../../actions/questionActions";

class Profile extends Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.id);
        this.props.getUserQuestions(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.getProfile(this.props.match.params.id);
            this.props.getUserQuestions(this.props.match.params.id);
        }
    }

    render() {
        const {id, name} = this.props.authReducer.user;
        let isOnOwnProfilePage = false;

        // Check if user is on their own profile page
        if (id === this.props.match.params.id) {
            isOnOwnProfilePage = true;
        }

        if (this.props.profileReducer.profile === null && isOnOwnProfilePage) {
            return (
                <div>
                    <p>Welcome {name}</p>
                    <Link to={`/users/${id}/${name}/edit`}>
                        Edit Profile
                    </Link>
                    <p>You have not yet setup your profile. Please add some info.</p>
                </div>
            )
        }

        // Check if other user has completed a profile
        if (this.props.profileReducer.profile === null) return "User has not yet completed their profile";

        // Response if user id does not exist
        if (this.props.profileReducer.profile === "no user") return "Sorry. This user doesn't exist";

        const {displayName, location, bio, website} = this.props.profileReducer.profile;
        const {questions} = this.props.questionReducer;

        return (
            <div className="Profile">

                {isOnOwnProfilePage ?
                    <Link to={`/users/${id}/${name}/edit`}>
                        Edit Profile
                    </Link> :
                    null
                }

                <p>{displayName}</p>
                <p>{location}</p>
                <p>{bio}</p>
                <p>{website}</p>
                <ul>
                    {questions.map(question => {
                        return (
                            <li key={question._id}>
                                {question.title} - {question.date}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profileReducer: state.profileReducer,
    questionReducer: state.questionReducer,
    authReducer: state.authReducer
});

export default connect(mapStateToProps, {getProfile, getUserQuestions})(Profile);
