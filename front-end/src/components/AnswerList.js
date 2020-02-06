import React, { Component } from 'react';
import UpvoteDownvote from './UpvoteDownvote';
import EditAnswer from './EditAnswer';
import CommentAnswer from './CommentAnswer';

class AnswerList extends Component {

    render() {
        console.log('ans : ', this.props);
        return (
            // <h1>vikas</h1>
            <div>
            <ul>
                {this.props.answers.answerResponseList.map(answer => (
                    <li key={answer.answerId}>
                        <EditAnswer ques_id={this.props.question_id} ans_id={answer.answerId} Body={answer.text}/>
                        <br/>
                        <small>by: {answer.author}</small>
                        {/* <AnswerDetails {...answer} /> */}
                        <small>
                            <strong style={{marginLeft:20}} >Created At: </strong>{answer.createdAt}
                            <strong style={{marginLeft:20}} >Updated At: </strong>{answer.updatedAt}
                        </small>
                        <UpvoteDownvote answer={answer} />
                        {answer.accepted && <input style={{marginLeft: 6}} disabled="true" type="submit" value="Accepted"/>}
                        <hr 
                            style= {{
                                color: 'blue',
                                backgroundColor: 'white',
                                height: 0.01
                            }}
                        />
                        <CommentAnswer ans_id={answer.answerId} ques_id={this.props.question_id} commentList={answer.commentResponseList} />
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
            </div>
        );
    }
};


export default AnswerList;