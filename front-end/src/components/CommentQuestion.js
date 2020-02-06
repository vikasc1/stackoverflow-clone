import React, { Component } from 'react';
import Question from '../requests';

class CommentQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            comments: ''
        };
    }
    componentDidMount() {
        console.log(this.props.question_id);
        Question.getQuestion(this.props.question_id).then(question => {
            this.setState({
                comments: question
            })
        })
    }
    handleClick = (event) => {
        event.preventDefault();
        const comment = prompt('add comment here:');
        // console.log(comment);
        this.setState({
            commentText: comment
        });
    }
    componentDidUpdate() {
        if (this.state.commentText) {
            let data = {
                "questionId": this.props.question_id,
                "emailId": "vikas@traveloka.com",
                "commentText": this.state.commentText
            }
            Question.addQuestionComment(data);
        }
    }

    render() {
        return (
            // <h1>vikas</h1>
            <div>
                <ul>
                    {this.state.comments.questionResponse && this.state.comments.questionResponse.commentResponseList.map(ans => (
                        <li>
                            {ans.commentText}
                            <p style={{textAlign:"right"}} >By: {ans.author}</p>
                            <hr 
                                style= {{
                                    color: 'blue',
                                    backgroundColor: 'white',
                                    height: 0.01
                                }}
                            />
                        </li> 
                    ))}
                </ul>
                <input type="submit" value="add comment" onClick={this.handleClick} />
            </div>
        );
    }
};

export default CommentQuestion;