import React, { Component } from 'react';
import { Question } from '../requests';
import QuestionDetails  from './QuestionDetails';
import AnswerList from './AnswerList';
import AnswerNew from '../containers/AnswerNew';
import CommentQuestion from './CommentQuestion';
import AnswerListNew from './AnswerListNew';

class QuestionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answers: null,
      loading: true
    };
  }
  componentDidMount() {
    // console.log("id ", this.props.match.params.id);
    const id = this.props.match.params.id;
    
    Question.getQuestion(id).then(question => {
      // console.log('hey : ', question);
      this.setState({
        question: question,
        loading: false
      })
    })
    Question.getAnswer(id).then(answers => {
      this.setState({
          answers: answers
      });
    });

  }
  addAnswer = (params) => {
      let data = {
        "answerText": params.answer,
        "questionId": this.props.match.params.id,
        "emailId": "vikas@traveloka.com",
        "commentResponseList": []
      }
      Question.addAnswer(data);
  }


  render() {
    if (this.state.loading) {
      return (
        <main>
          <h2>Loading...</h2>
        </main>
      );
    }
    // let question_id = this.state.question.questionResponse.questionId;
    // console.log('q : ', question_id);
    // console.log(this.state.question.questionResponse);
    let data = {
      accepted_ans: this.state.question.questionResponse.hasAcceptedAnswer,
      question_id: this.state.question.questionResponse.questionId,
      answers: this.state.answers
    }
    return(
      <main>
        <QuestionDetails {...this.state.question}/>
        <CommentQuestion question_id={this.state.question.questionResponse.questionId}/>
        <hr
          style= {{
              color: 'blue',
              backgroundColor: 'white',
              height: 0.01
          }}
        />
        <h2>Answers</h2>
        {(this.state.question.questionResponse.hasAcceptedAnswer) ?
              this.state.answers && <AnswerList {...data} /> :
              this.state.answers && <AnswerListNew {...data} />
        }
        <AnswerNew onSubmit={this.addAnswer}/>
      </main>
    );
  }
};

export default QuestionShowPage;

// TODO: HERE -> | check hasAcceptedAnswer for questionId
//          yes -> mark that answer (accepted: true) and list all in page
//          no  -> onclick button(mark as ans) of that ans -> set hasAcceptedAnswer 
//                  & (accepted: true) -> call <AnswerList> page again 