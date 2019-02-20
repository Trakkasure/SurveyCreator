import React from "react";
import ReactDOM from "react-dom";
import QuestionHolder from "./components/QuestionsHolder.jsx";
import axios from "axios";
import { createStore } from "redux";
// import RootReducer from "./store/rootReducer.js";
import Reducer from "./store/reducers/changeInput";
import { Provider } from "react-redux";
import * as actions from "./store/actions";
import { Typography, Button } from "@material-ui/core";
const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const dispatcher = (e, value, question) => {
  const unsubscribe = store.subscribe(() => {
    // console.log("Logging state!: ", store.getState());
  });
  switch (e.target.type) {
    case "button":
      store.dispatch(actions.editRange(question, value));
      unsubscribe();

      break;
    case "radio":
      store.dispatch(actions.editMulti(question, value));
      unsubscribe();

      break;
    default:
      unsubscribe();
      break;
  }
};

const sendData = () => {
  axios.post("/postSurveyData", store.getState());
};

const render = () => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Take your Survey!
      </Typography>
      <QuestionHolder store={store} dispatcher={dispatcher} />
      <Button
        variant="contained"
        id="submitButton"
        type="submit"
        name="action"
        onClick={sendData}
      >
        Submit
      </Button>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store} dispatcher={dispatcher}>
    {render()}
  </Provider>,
  document.getElementById("app")
);
