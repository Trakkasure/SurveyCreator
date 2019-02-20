import React from "react";
// import Answers from "./Answers.jsx";
import Boolean from "./questionTypes/Boolean.js";
import FiniteValue from "./questionTypes/FiniteValue.js";
import MultipleChoice from "./questionTypes/MultipleChoice.js";
import { Typography } from "@material-ui/core";

const Question = props => {
  switch (props.data.type) {
    case "fv":
      return (
        <div>
          <Typography component="h5" variant="h4" gutterBottom>
            {props.data.question}
          </Typography>
          <FiniteValue data={props.data} />
        </div>
      );
    case "boolean":
      return (
        <div>
          <Typography component="h5" variant="h4" gutterBottom>
            {props.data.question}
          </Typography>
          <Boolean data={props.data} />
        </div>
      );
    case "op": // TO DO: Need to figure out what and how to do this.
      return (
        <div className="order">
          <Typography component="h5" variant="h4" gutterBottom>
            {props.data.question}
          </Typography>
          {props.data.answers.map(data => {
            return data;
          })}
        </div>
      );
    case "mc":
      return (
        <div>
          <Typography component="h5" variant="h4" gutterBottom>
            {props.data.question}
          </Typography>
          <MultipleChoice data={props.data} />
        </div>
      );
  }
  // return (
  //   <div className="questions">
  //     <h5>{props.data.question}</h5>
  //     <Answers data={props.data} />
  //   </div>
  // );
};

export default Question;
