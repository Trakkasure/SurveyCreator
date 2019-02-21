import React, { useCallback, useState } from "react";
import Button from "@material-ui/core/Button";
import Question from "./Question.js";

const QuestionHolder = () => {
  const [questions, addQuestion] = useState([
    { id: 0, isShown: true },
    { id: 1, isShown: true }
  ]);
  const onAddQuestion = useCallback(() => {
    questions.push({
      id: questions[questions.length - 1].id + 1,
      isShown: true,
      question: ""
    });
    addQuestion([...questions]);
    console.log(questions);
  });

  const removeQuestion = id => {
    console.log(id);
    questions[id].isShown = false;
    addQuestion([...questions]);
  };

  return (
    <div>
      <Button variant="outlined" onClick={onAddQuestion}>
        Add Question
      </Button>
      <div id="questionHolder">
        {questions.map(a => {
          if (a.isShown) {
            return <Question id={a.id} removeQuestion={removeQuestion} />;
          }
        })}
      </div>
    </div>
  );
};

export default QuestionHolder;
