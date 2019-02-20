import React from "react";
import { FormControlLabel, RadioGroup, Radio } from "@material-ui/core";

const MultipleChoice = props => {
  return (
    <RadioGroup className="multichoice" key={props.data.key}>
      {props.data.answers.map(data => {
        return (
          <FormControlLabel
            value={data}
            control={<Radio color="primary" />}
            label={data}
          />
        );
      })}
    </RadioGroup>
  );
};

export default MultipleChoice;
