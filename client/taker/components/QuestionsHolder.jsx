import React from "react";

import Question from "./Question.jsx";
import questions from "../../../SampleData/surveys.js";

const QuestionsHolder = () => {
  return (
    <form id="survey">
      {questions.surveys.life.questions.map(data => {
        return <Question data={data} />;
      })}
    </form>
  );
};

export default QuestionsHolder;
