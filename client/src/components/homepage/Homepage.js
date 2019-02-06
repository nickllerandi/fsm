import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getQuestions} from "../../actions/questionActions";

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.props.getQuestions();
    }

    render() {
        const {questions} = this.props.questionReducer;
        const {name} = this.props.authReducer.user;

        return (
            <div className="Landing">
                <h1>Fullstack Musician</h1>
                {name ? <h2>Hi {name}</h2> : null}
                <Link to="/ask">Ask a Question</Link>
                <ul>
                    {questions.map(question => {
                        return (
                            <li key={question._id}>
                                {question.title} -
                                {question.tags.map(tag => {
                                    return ` ${tag} | `
                                })}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer,
    questionReducer: state.questionReducer
});

export default connect(mapStateToProps, {getQuestions})(Homepage);
