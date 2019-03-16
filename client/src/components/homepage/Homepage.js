import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getQuestions} from "../../actions/questionActions";

// Components
import AllQuestions from "../questions/AllQuestions";

class Homepage extends Component {
    componentDidMount() {
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
                <AllQuestions
                    questions={questions}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer,
    questionReducer: state.questionReducer
});

export default connect(mapStateToProps, {getQuestions})(Homepage);
