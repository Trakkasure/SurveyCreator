import React from "react";
import ReactDOM from "react-dom";
import QuestionHolder from "./components/QuestionsHolder.jsx";
import axios from "axios";
import { createStore } from "redux";
import RootReducer from "./store/rootReducer.js";
import { Provider } from "react-redux";

import { Button, Typography } from "@material-ui/core";

const store = createStore(RootReducer);

const sendData = () => {
  axios.post("/postSurveyData", {});
};

const render = () => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Take your Survey!
      </Typography>
      <QuestionHolder />
      <Button
        variant="contained"
        id="submitButton"
        type="submit"
        name="action"
        onClick={sendData}
      >
        Submit
        {/* <i className="material-icons right">send</i> */}
      </Button>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>{render()}</Provider>,
  document.getElementById("app")
);
