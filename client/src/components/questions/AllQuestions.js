import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'

// Styled Components / Utils
import {lighterblack, black, primary} from '../../utils'
import {darken} from 'polished'

// import {Card} from '../../elements'

class AllQuestions extends Component {
    render() {
        const {questions} = this.props;

        return (
            <div className="AllQuestions">
                {questions.map(question => {
                    return (
                        <Card key={question._id}>
                            <div className='likes'>
                                <div className='likes_value'>{question.likes.length}</div>
                                <div>likes</div>
                            </div>

                            <div className='summary'>
                                <h3>
                                    <Link to={`/questions/${question._id}`}>
                                        {question.title}
                                    </Link>
                                </h3>
                                <div className='started'>
                                    {question.user ? (
                                        <Link to={`/users/${question.user._id}/${question.user.name}`}>
                                            {question.user.name}
                                        </Link>
                                    ) :
                                        'User deleted profile :('
                                    }
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
    padding: 12px 8px;
    border-bottom: 1px solid ${lighterblack};
    color: ${black};

    .likes {
        padding-right: 30px;

        &_value {
            text-align: center;
        }
    }

    .summary {
        flex: 1 auto;
        width: auto;
        float: none;
        margin: 0;
        overflow: hidden;

        h3 {
            font-weight: 400;
            margin: 0 0 .35em 0;
            line-height: 1.3;

            a {
                text-decoration: none;
                color: ${black};
            }

            a:hover {
                color: ${primary}
            }
        }

        .started {
            width: auto;
            line-height: inherit;
            padding-top: 4px;
            float: right;
            
            a {
                text-decoration: none;
                color: ${primary};
                
                &:hover {
                    color: ${darken(0.2, primary)};
                }
            }
        }
    }
`;

export default AllQuestions;