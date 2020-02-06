import React, { Component } from 'react';

class QuestionNewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        this.props.onSubmit({
            title: event.target.title.value,
            body: event.target.body.value,
            created_at: Date.now(),
            updated_at: Date.now(),
        })
        // window.location.reload();
    }
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value,
        });
    }
    render() {
        return (
            <form className="QuestionForm" onSubmit={this.handleSubmit}>
                <div>
                    <label>Title</label><br />
                    <input name="title" id="title" onChange={this.handleChange} />
                </div>
                <div>
                <br />
                <label>Body</label> <br />
                    <textarea name="body" id="body" onChange={this.handleChange} cols="50" rows="4" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
};

export default QuestionNewForm;