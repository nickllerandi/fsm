import React, {Component} from "react";
import {connect} from "react-redux";

import {getQuestion} from "../../actions/questionActions";

class Question extends Component {
    componentDidMount() {
        this.props.getQuestion(this.props.match.params.id);
    }

    render() {
        const {title, body} = this.props.questionReducer.question;

        return (
            <div className="Question">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    questionReducer: state.questionReducer
});

export default connect(mapStateToProps, {getQuestion})(Question);
