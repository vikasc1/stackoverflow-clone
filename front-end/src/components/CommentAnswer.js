import React, { Component } from 'react';
import Question from '../requests';

class CommentAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            comments: ''
        };
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
                "answerId": this.props.ans_id,
                "emailId": "vikas@traveloka.com",
                "commentText": this.state.commentText
            }
            Question.addAnswerComment(data);
        }
        window.location.reload();
    }

    render() {
        console.log(this.props.commentList);
        return (
            // <h3>vikas</h3>
            <div>
                <ul>
                    {this.props.commentList.map(ans => (
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

export default CommentAnswer;