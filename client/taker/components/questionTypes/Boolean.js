import React from "react";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

const Boolean = props => {
  return (
    <div className="boolean">
      <RadioGroup key={props.data.key}>
        <FormControlLabel
          value="true"
          control={<Radio color="primary" />}
          label="True"
        />
        <FormControlLabel
          value="false"
          control={<Radio color="primary" />}
          label="False"
        />
      </RadioGroup>
    </div>
  );
};

export default Boolean;
