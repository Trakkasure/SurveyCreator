import React from "react";

import Question from "./Question.jsx";
import questions from "../../../SampleData/surveys.js";

class QuestionsHolder extends React.Component {
  render() {
    return (
      <form id="survey">
        {questions.surveys.life.questions.map(data => {
          return <Question data={data} key={data.key} />;
        })}
      </form>
    );
  }
}
export default QuestionsHolder;
