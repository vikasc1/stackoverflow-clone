import React, { Component } from 'react';
import Question from '../requests';

class EditTitleTextQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.text,
            isInEditMode: false
        }
    }
    

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
        // console.log('should go to edit');
    }
    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.refs.theTextInput.value
        })
    }
    componentDidUpdate() {
        console.log('value : ', this.state.value, this.props.question_id);
        // <= make API update here
        let data = {
            "emailId": "vikas@traveloka.com",
            "questionId": this.props.question_id,
            "questionTitle": this.props.title,
            "questionText": this.state.value
        }
        Question.editQuestion(data);

    }

    renderEditView = () => {
        return(
            <div>
                <input type="text" defaultValue={this.state.value} ref="theTextInput" size="60"/>
                <button onClick={this.changeEditMode}>X</button>
                <button onClick={this.updateComponentValue}>OK</button>
            </div>
        );
    }

    renderDefaultView = () => {
        return (
            <div onDoubleClick={this.changeEditMode}>
                {this.state.value}
            </div>
        );
    }

    render() {
        // console.log(this.props.answerBody);
        return (
            this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView() 
            
        );
    }

};

export default EditTitleTextQuestion;