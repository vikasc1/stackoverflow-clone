import React, { Component } from 'react';

class AnswerNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            created_at: '',
            updated_at: ''
        }
    }
    handleClick = () => {
        this.props.onSubmit({
            answer: this.state.answer,
            created_at: this.state.created_at,
            updated_at: this.state.updated_at
        });
        this.setState({
            answer: ''
        })
        window.location.reload();
    }
    handleChange = (event) => {
        this.setState({
            answer: event.target.value,
            created_at: Date.now(),
            updated_at: Date.now()
        })
    }

    render() {
        return (
            <div>
                <label>Your Answer</label> <br/>
                <textarea name="body" id="body" defaultValue="" onChange={this.handleChange} cols="50" rows="5"/> <br />
                <input type="submit" value="Post Answer" onClick={this.handleClick}/>
            </div>
        );
    }
};

export default AnswerNew;