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

    render() {
        if (this.props.profileReducer.profile === null) return "User has not yet completed their profile";

        const {displayName, location, bio, website} = this.props.profileReducer.profile;
        const {questions} = this.props.questionReducer;

        return (
            <div className="Profile">
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
    questionReducer: state.questionReducer
});

export default connect(mapStateToProps, {getProfile, getUserQuestions})(Profile);
