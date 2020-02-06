import React, { Component } from 'react';
import { Question } from '../requests';


class UpvoteDownvote extends Component {

    handleOnClick =(event) => {
        // console.log(this.props);
        const answer_id = this.props.answer.answerId;
        if (event.target.value === 'UP') {
            Question.upvoteAnswer(answer_id);
        } else if (event.target.value === 'DOWN') {
            Question.downvoteAnswer(answer_id);
        }
    }

    render(){
        return(
            <div>
                <br />
                <input type="submit" value="UP" onClick={this.handleOnClick}/>
                <input style={{marginLeft: 6, textAlign:"center"}} type="text" value={this.props.answer.votes} size="1"  />
                <input style={{marginLeft: 6}} type="submit" value="DOWN" onClick={this.handleOnClick} onSubmit={this.handleSubmit}/>
                {/* {<input style={{marginLeft: 6}} type="submit" value="Mark As Accept" onClick={this.handleOnClick} />} */}
            </div>
        );
    }
};

export default UpvoteDownvote;