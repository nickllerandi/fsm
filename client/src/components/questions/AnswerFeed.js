import React, { Component } from 'react';
import {connect} from 'react-redux';

class AnswerFeed extends Component {
    onAnswerDeleteClick(answerId) {
        console.log(answerId);
    }

    render() {
        return (
            <div className="AnswerFeed">
                {this.props.questionReducer.question.answers.map(answer => {
                    return (
                        <div 
                            key={answer._id}
                        >
                            {answer.name} - {answer.body} - {answer.date}
                            {this.props.authReducer.user.id === answer.user ?       
                                <button 
                                    onClick={this.onAnswerDeleteClick.bind(this, answer._id)}
                                >
                                    Delete
                                </button> : 
                                null
                            }
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer,
    questionReducer: state.questionReducer
});

export default connect(mapStateToProps)(AnswerFeed);