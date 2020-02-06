import React, { Component } from 'react';
import Question from '../requests';

class EditAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.Body,
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
        // console.log('value : ', this.state.value, this.props.ans_id);
        // <= make API update here
        let data = {
            "emailId": "vikas@traveloka.com",
            "answerId": this.props.ans_id,
            "text": this.state.value
        }
        Question.editAnswer(data);
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

export default EditAnswer;