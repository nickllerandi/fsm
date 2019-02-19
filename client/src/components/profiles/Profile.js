import React, {Component} from "react";
import {connect} from "react-redux";

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
        if (this.props.profileReducer.profile === "no user") return "Sorry. This user doesn't exist";

        // Check if user has completed a profile
        if (this.props.profileReducer.profile === null) return "User has not yet completed their profile";

        const {displayName, location, bio, website} = this.props.profileReducer.profile;
        const {questions} = this.props.questionReducer;
        const {id} = this.props.authReducer.user;

        // Check if user is on their own profile page
        let isOnOwnProfilePage = false;
        if (id === this.props.match.params.id) {
            isOnOwnProfilePage = true;
        }

        return (
            <div className="Profile">

                {isOnOwnProfilePage ?
                    <p>Edit Profile</p> :
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
