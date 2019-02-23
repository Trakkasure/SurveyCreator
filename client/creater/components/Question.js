import React, { useState, useCallback } from "react";
import {
  Button,
  InputLabel,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";

import { TrueFalse, OrderOfPrecidence } from "./questionTypes/";
import MultiChoice from "./questionTypes/MultiChoice";

// const renderAnswers = qType => {
//   switch (qType) {
//     case "MultipleChoice":
//       return <MultiChoice />;
//     case "TrueFalse":
//       return <TrueFalse />;
//     case "OrderOfPrecidence":
//       return <OrderOfPrecidence />;
//     default:
//       return <div>Choose Question Type</div>;
//   }
// };

const Question = props => {
  const [qType, changeType] = useState("");

  return (
    <div key={props.key}>
      <input type="text" />
      {"Question"}

      <div>
        <form autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="age-simple">Question Type</InputLabel>
            <Select
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
              value=""
              onChange={(e, value) => {
                switch (value.props.value) {
                  case 1:
                    changeType("MultipleChoice");
                    console.log("Question Switched to MultipleChoice");

                    break;
                  case 2:
                    changeType("TrueFalse");
                    console.log("Question Switched to TrueFalse");

                    break;
                  case 3:
                    changeType("OrderOfPrecidence");
                    console.log("Question Switched to OrderOfPrecidence");

                    break;
                  default:
                    console.warn("Question type not supported");
                    break;
                }
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Multiple Choice</MenuItem>
              <MenuItem value={2}>True/False</MenuItem>
              <MenuItem value={3}>Order of Precidence</MenuItem>
            </Select>
            {qType === "MultipleChoice" ? (
              <MultiChoice />
            ) : qType === "TrueFalse" ? (
              <TrueFalse />
            ) : qType === "OrderOfPrecidence" ? (
              <OrderOfPrecidence />
            ) : (
              <div>Choose Question Type</div>
            )}
          </FormControl>
        </form>
      </div>
      <div>
        <Button
          onClick={() => {
            props.removeQuestion(props.id);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
export default Question;
