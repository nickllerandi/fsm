import React, {Component} from "react";
import {Link} from "react-router-dom";

class AllQuestions extends Component {
    render() {
        const {questions} = this.props;

        return (
            <ul className="AllQuestions">
                {questions.map(question => {
                    return (
                        <li key={question._id}>
                            <Link to={`/questions/${question._id}`}>{question.title}</Link>
                            -
                            {question.tags.map(tag => {
                                return ` ${tag} | `
                            })}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default AllQuestions;