import React, { useCallback, useState } from "react";
import Button from "@material-ui/core/Button";
import Question from "./Question.js";

const addQuestion = () => {
  // this.state.questions.push({ key: Math.random() * 10, isShown: true });
  // this.setState({ questions: this.state.questions });
};

const removeQuestion = key => {
  // this.setState({ key, isShown: false });
};

const QuestionHolder = () => {
  const [questions, addQuestion] = useState([]);
  const onAddQuestion = useCallback(() => {
    return <Question />;
  });
  return (
    <div>
      <Button variant="outlined" onClick={addQuestion}>
        Add Question
      </Button>
      <div id="questionHolder">
        {questions.map(a => {
          if (a.isShown) {
            return <Question key={a.key} removeQuestion={removeQuestion} />;
          }
        })}
      </div>
    </div>
  );
};

export default QuestionHolder;
