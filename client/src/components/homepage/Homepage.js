import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getQuestions} from "../../actions/questionActions";

// Components
import AllQuestions from "../questions/AllQuestions";

import styled from "styled-components"

const Button = styled.button`
    background: indigo;
    padding: 5px 10px;
    border-radius: 4px;
    color: white;
    font-size: 2rem;
    border: none;
    ${props => props.type === 'cancel' && 'background: tomato'}
`;

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
                <Button>
                    <Link to="/ask">Ask a Question</Link>
                </Button>
                <Button type='cancel'>Cancel</Button>
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
