import React from 'react';
import EditTitleQuestion from './EditTitleQuestion';
import EditTitleTextQuestion from './EditTitleTextQuestion';
// import CommentQuestion from './CommentQuestion';

const QuestionDetails = props => {
    // console.log(props.questionResponse.questionId);
    return (
        <div>
            <EditTitleQuestion question_id={props.questionResponse.questionId} title={props.questionResponse.questionTitle} text={props.questionResponse.questionText}/>
            <p>
                <small>Create {props.questionResponse.createdAt}</small>
                <small style={{marginLeft:60 }}>Last edited {props.questionResponse.updatedAt}</small>
            </p>
            <hr 
                style= {{
                    color: 'blue',
                    backgroundColor: 'white',
                    height: 0.01
                }}
            />
            <EditTitleTextQuestion question_id={props.questionResponse.questionId} title={props.questionResponse.questionTitle} text={props.questionResponse.questionText} />
            <p align="right">By {props.questionResponse.author}</p>
            <hr 
                style= {{
                    color: 'blue',
                    backgroundColor: 'white',
                    height: 0.01
                }}
            />
            {/* <CommentQuestion question_id={props.questionResponse.questionId}/> */}
        </div>
    );
};

export default QuestionDetails;