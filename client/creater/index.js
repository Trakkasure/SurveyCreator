import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

import QuestionHolder from "./components/QuestionHolder.js";

const handleSubmit = answers => {
  console.log("Submit button clicked!");
};

const App = () => {
  return (
    <div>
      <QuestionHolder />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
