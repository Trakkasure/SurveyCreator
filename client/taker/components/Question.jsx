import React from "react";
import Answers from "./Answers.jsx";

const Question = props => {
  return (
    <div className="questions">
      <h5>{props.data.question}</h5>
      <Answers data={props.data} />
    </div>
  );
};

export default Question;
