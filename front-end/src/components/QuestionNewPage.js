import React, { Component } from 'react';
import QuestionNewForm from './QuestionNewForm';
import Question from '../requests';

class QuestionNewPage extends Component {
    addQuestion = (params) => {
        Question.addQuestion(params);
    }

    render() {
        return(
            <main>
                <h2>New Question</h2>
                <QuestionNewForm onSubmit={this.addQuestion} />
            </main>
        );
    }
};

export default QuestionNewPage;