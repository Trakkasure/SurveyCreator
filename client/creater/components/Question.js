import React, { useState } from "react";
import {
  Button,
  InputLabel,
  TextField,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";

import { TrueFalse, OrderOfPrecidence, MultiChoice } from "./questionTypes/";

const Question = props => {
  const [qType, changeType] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div key={props.key}>
      <TextField label="Question" />

      <div>
        <form autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="open-select">Question Type</InputLabel>
            <Select
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              value={qType}
              inputProps={{
                name: "QuestionType",
                id: "open-select"
              }}
              onChange={(e, value) => {
                switch (value.props.value) {
                  case 1:
                    changeType("MultipleChoice");
                    break;
                  case 2:
                    changeType("TrueFalse");
                    break;
                  case 3:
                    changeType("OrderOfPrecidence");
                    break;
                  default:
                    changeType("");
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
