import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import styled from 'styled-components'

// COMPONENTS
import Answer from "./Answer";
import AnswerFeed from "./AnswerFeed";

// ACTIONS
import {getQuestion, deleteQuestion, likeQuestion, clearErrors} from "../../actions/questionActions";

// STYLED-COMPONENTS
import {Card} from '../../elements'

class Question extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }

    componentDidMount() {
        this.props.getQuestion(this.props.match.params.id);
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
        const {question} = this.props.questionReducer;
        const {title, body, user, likes} = this.props.questionReducer.question;
        const {id} = this.props.authReducer.user;
        const questionId = this.props.questionReducer.question._id;

        if (likes === undefined) return "...loading"

        return (
            <div className='Question'>
                <Card
                    className='card' 
                    key={question._id}
                >
                    <h3 className='card__heading'>
                        {question.title}
                    </h3> 
                    <div className='card__user'>
                        {question.user ? (
                            <Link to={`/users/${question.user._id}/${question.user.name}`}>
                                <button className='card__user-button'>
                                    {question.user.name}
                                </button>
                            </Link>
                        ) :
                            'User deleted profile :('
                        }
                    </div>
                    <div className='card__rating'>
                        <div className='card__rating-answers'>
                            {question.answers.length} answers
                        </div>    
                        <div className='card__rating-likes'>
                            {question.likes.length} likes
                        </div>
                    </div>        
                </Card>

                <DetailStyled className='detail'>
                    <div className='body'>
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

                        <Answer/>
                    </div>

                    <div className='answers'>
                        <AnswerFeed/>
                    </div>
                </DetailStyled>
            </div>
        )
    }
}

const DetailStyled = styled.div`
    display: flex;
    padding: 4.5rem;

    .body {
        background-color: orangered;
        flex: 0 0 60%;
        margin-right: 4.5rem;
    }

    .answers {
        background-color: yellowgreen;
        flex: 1;
    }
`

const mapStateToProps = state => ({
    questionReducer: state.questionReducer,
    authReducer: state.authReducer,
    errorReducer: state.errorReducer
});

export default connect(mapStateToProps, {getQuestion, deleteQuestion, likeQuestion, clearErrors})(Question);
