import React, { Component } from 'react';
import {connect} from 'react-redux';

class AnswerFeed extends Component {
    render() {
        return (
            <div className="AnswerFeed">
                {this.props.questionReducer.question.answers.map(answer => {
                    return <p key={answer._id}>{answer.name} - {answer.body} - {answer.date}</p>
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    questionReducer: state.questionReducer
});

export default connect(mapStateToProps)(AnswerFeed);