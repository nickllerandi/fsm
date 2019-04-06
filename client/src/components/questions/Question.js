import React, {Component} from "react";
import {connect} from "react-redux";

import {getQuestion} from "../../actions/questionActions";

class Question extends Component {
    componentDidMount() {
        this.props.getQuestion(this.props.match.params.id);
    }

    deleteQuestion(questionId) {
        console.log(questionId);
    }

    render() {
        const {title, body, user} = this.props.questionReducer.question;
        const {id} = this.props.authReducer.user;
        const questionId = this.props.questionReducer.question._id;

        return (
            <div className="Question">
                <h1>{title}</h1>
                <p>{body}</p>
                {user === id ? (
                    <button onClick={this.deleteQuestion.bind(this, questionId)}>Delete</button>    
                ) :
                null
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    questionReducer: state.questionReducer,
    authReducer: state.authReducer
});

export default connect(mapStateToProps, {getQuestion})(Question);
