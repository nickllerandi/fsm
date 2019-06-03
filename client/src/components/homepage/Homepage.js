import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import styled from 'styled-components'

// Actions
import {getQuestions} from "../../actions/questionActions";

// Components
import AllQuestions from "../questions/AllQuestions";

// Styled Components
import {Heading, Button} from '../../elements'
import {lighterblack} from '../../utils'

class Homepage extends Component {
    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        const {questions} = this.props.questionReducer;

        return (
            <HomepageStyled className="homepage">
                <div className='homepage__heading'>
                    <h1 className='homepage__h1'>
                        Recent Questions
                    </h1>

                    <div className='homepage__ask-button'>
                        <Link to="/ask">
                            <Button>Ask a Question</Button>
                        </Link>
                    </div>
                </div>

                <AllQuestions
                    questions={questions}
                />
            </HomepageStyled>
        )
    }
}

const HomepageStyled = styled.div`

    .homepage {
        &__heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid ${lighterblack};
            font-size: 1.4rem;
        }

        &__h1 {
            font-weight: 300;
            text-transform: uppercase;
            /* letter-spacing: 1px; */
            padding: 1.5rem 3rem;
        }

        &__ask-button {
            display: inline-block;
        }
    }

    
`

const mapStateToProps = state => ({
    authReducer: state.authReducer,
    questionReducer: state.questionReducer
});

export default connect(mapStateToProps, {getQuestions})(Homepage);
