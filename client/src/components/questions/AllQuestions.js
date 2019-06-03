import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'

// Styled Components / Utils
import {lighterblack, black, primary} from '../../utils'
import {darken} from 'polished'

class AllQuestions extends Component {
    render() {
        const {questions} = this.props;

        return (
            <div className="AllQuestions">
                {questions.map(question => {
                    return (
                        <Card
                            className='card' 
                            key={question._id}
                        >
                            <h3 className='card__heading'>
                                <Link to={`/questions/${question._id}`}>
                                    {question.title}
                                </Link>
                            </h3> 

                            <div className='card__user'>
                                {question.user ? (
                                    <Link to={`/users/${question.user._id}/${question.user.name}`}>
                                        <button className='btn-inline'>
                                            {question.user.name}
                                        </button>
                                    </Link>
                                ) :
                                    'User deleted profile :('
                                }
                            </div>

                            <div className='card__rating'>
                                <div className='card_rating-likes'>
                                    {question.likes.length}
                                </div>
                                <div className='card_rating-answers'>
                                    {question.answers.length}
                                </div>
                            </div>
                            
                        </Card>
                    )
                })}
            </div>
        )
    }
}

const Card = styled.div`    
    display: flex;
    
    .card {
        &__heading {
            margin-right: auto;
        }

        &__user {
            
        }

        &__rating {

            &-likes {

            }

            &-answers {

            }
        }
    }
`;

export default AllQuestions;