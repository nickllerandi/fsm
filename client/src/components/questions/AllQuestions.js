import React, {Component} from "react";
import {Link} from "react-router-dom";

// Styled Components
import {Card} from '../../elements'

class AllQuestions extends Component {
    render() {
        const {questions} = this.props;

        return (
            <div className="AllQuestions">
                {questions.map(question => {
                    return (
                        <Card key={question._id}>
                            <Link to={`/questions/${question._id}`}>
                                {question.title}
                            </Link> -
                            {question.user ? 
                                <Link to={`/users/${question.user._id}/${question.user.name}`}> {question.user.name}</Link> :
                                'User deleted profile :('
                            }
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default AllQuestions;