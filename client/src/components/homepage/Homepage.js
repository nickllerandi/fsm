import React, {Component} from "react";
// import axios from "axios";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getQuestions} from "../../actions/questionActions";

class Homepage extends Component {
    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        const {questions} = this.props.questionReducer;

        return (
            <div className="Landing">
                <h1>Fullstack Musician</h1>
                <Link to="/">Ask a Question</Link>
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
    questionReducer: state.questionReducer
});

export default connect(mapStateToProps, {getQuestions})(Homepage);
