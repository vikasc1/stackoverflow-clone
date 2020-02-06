import React from 'react';

const AnswerDetails = props => {
    // console.log('props ', props);
    return (
        <div style={{
            // backgroundColor: 'whitesmoke',
            borderRadius: "5px",
            paddingLeft: "5px"
        }}>
        
        {/* <p>{props.body}</p> */}
        <br />
        <p>
            <small>By {props.answerer.full_name}</small> <br />
            <small>
                <strong>Created At:</strong>{props.created_at}
            </small>
        </p>
        </div>
    );
};

export default AnswerDetails;
