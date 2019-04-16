import React, {Component} from "react";
import {connect} from "react-redux";

import {getQuestion, deleteQuestion, likeQuestion, clearErrors} from "../../actions/questionActions";

class Question extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }

    componentDidMount() {
        this.props.getQuestion(this.props.match.params.id);
        // console.log(this.props.questionReducer.question.likes.length)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errorReducer) {
            this.setState({errors: nextProps.errorReducer})
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    deleteQuestion(questionId) {
        this.props.deleteQuestion(questionId, this.props.history);
    }

    onLikeClick(questionId) {
        this.props.likeQuestion(questionId);
    }

    render() {
        const {title, body, user, likes} = this.props.questionReducer.question;
        const {id} = this.props.authReducer.user;
        const questionId = this.props.questionReducer.question._id;

        if (likes === undefined) return "...loading"

        return (
            <div className="Question">
                Likes: {likes.length}
                <h1>{title}</h1>
                <p>{body}</p>
                <button 
                    onClick={this.onLikeClick.bind(this, questionId)}
                >
                    Like
                </button>
                {this.state.errors.alreadyLiked}
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
    authReducer: state.authReducer,
    errorReducer: state.errorReducer
});

export default connect(mapStateToProps, {getQuestion, deleteQuestion, likeQuestion, clearErrors})(Question);
