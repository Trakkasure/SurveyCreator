import React from "react";
import Button from "@material-ui/core/Button";
import Question from "./Question.js";

class QuestionHolder extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: []
    };
    this.removeQuestion.bind(this);
  }
  addQuestion = () => {
    this.state.questions.push({ key: Math.random() * 10, isShown: true });
    this.setState({ questions: this.state.questions });
  };

  removeQuestion = key => {
    this.setState({ key, isShown: false });
  };

  render() {
    return (
      <div>
        QuestionHolder
        <Button variant="outlined" onClick={this.addQuestion}>
          Add Question
        </Button>
        <div id="questionHolder">
          {this.state.questions.map(a => {
            if (a.isShown) {
              return (
                <Question key={a.key} removeQuestion={this.removeQuestion} />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default QuestionHolder;
