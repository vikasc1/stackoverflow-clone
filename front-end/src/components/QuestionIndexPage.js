import React, { Component } from 'react';
import Question from '../requests';
import { Link } from 'react-router-dom';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }
  componentDidMount() {
    Question.all().then(questions => {
      console.log(questions);
      this.setState({
        questions: questions
      });
    });
  }
  render() {
    if (!this.state.questions) {
      return (
        <main>
          <h3>Loading...</h3>
        </main>
      );
    }
    return (
      <main>
        <h1>Questions</h1>
        <ul>
          {this.state.questions.questionResponseList.map(question => (
            <li key={question.id}>
              {/* <a href="#ignore-me">{question.title}</a> */}
              <Link to={`/questions/${question.questionId}`}>{question.questionTitle}</Link> <label> | asked by : {question.author}</label> <br />
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
      </main>
    );
  }
};

export default QuestionIndexPage;