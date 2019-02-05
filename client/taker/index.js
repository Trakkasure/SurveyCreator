import React from "react";
import ReactDOM from "react-dom";
import QuestionHolder from "./components/QuestionsHolder.jsx";
import axios from "axios";
import { createStore } from "redux";
import RootReducer from "./store/rootReducer.js";
import { Provider } from "react-redux";

const store = createStore(RootReducer);

const sendData = () => {
  axios.post("/postSurveyData", {});
};

const render = () => {
  return (
    <div>
      <h2>Take your Survey!</h2>
      <QuestionHolder />
      <button
        className="btn waves-effect waves-light"
        id="submitButton"
        type="submit"
        name="action"
        onClick={sendData}
      >
        Submit
        {/* <i className="material-icons right">send</i> */}
      </button>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>{render()}</Provider>,
  document.getElementById("app")
);
