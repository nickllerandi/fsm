import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

// Actions
import {getQuestions} from "../../actions/questionActions";

// Components
import AllQuestions from "../questions/AllQuestions";

// Styled Components
import {Heading, Button} from '../../elements'

class Homepage extends Component {
    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        const {questions} = this.props.questionReducer;

        return (
            <div className="Landing">
                <Heading>Recent Questions</Heading>
                <Link to="/ask">
                    <Button>Ask a Question</Button>
                </Link>
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
