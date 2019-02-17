import React from "react";
import {
  Button,
  InputLabel,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";
const Question = props => {
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
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Multiple Choice</MenuItem>
              <MenuItem value={2}>True/False</MenuItem>
              <MenuItem value={3}>Order of precidence</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
      <div>
        <Button>Remove</Button>
      </div>
    </div>
  );
};
export default Question;
