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
        const {name} = this.props.authReducer.user;

        return (
            <div className="Landing">
                <Heading>Full Stack Musician</Heading>
                {name ? <h2>Hi {name}</h2> : null}
                <Button>
                    <Link to="/ask">Ask a Question</Link>
                </Button>
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
