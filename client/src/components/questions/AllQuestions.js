import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'

// Styled Components / Utils
import {lighterblack, black, primary, primary_light, white} from '../../utils'
import {lighten} from 'polished'

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
                    )
                })}
            </div>
        )
    }
}

const Card = styled.div`    
    display: flex;
    align-items: center;
    
    .card {
        &__heading,
        &__heading > *:link,
        &__heading > *:visited {
            margin-right: auto;
            font-size: 2.25rem;
            font-weight: 300;
            /* text-transform: uppercase; */
            /* letter-spacing: 1px; */
            padding: 1.5rem;
            text-decoration: none;
            color: ${black};
        }

        &__user {
            font-size: 1.2rem;
            display: flex;

            &-button {
                border: none;
                color: ${primary};
                font-size: inherit;
                cursor: pointer;
                border-bottom: 1px solid currentColor;
                display: inline-block;
                background-color: transparent;
                transition: all .2s;

                &:hover {
                    color: ${primary_light};
                }
            }
        }

        &__rating {
            background-color: ${primary};
            margin-left: 3rem;
            color: ${white};
            align-self: stretch;
            padding: 0 2.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            &-answers {
                font-size: 2.25rem;
                font-weight: 300;
            }           

            &-likes {
                font-size: .8rem;
                text-transform: uppercase;
            }

        }
    }
`;

export default AllQuestions;