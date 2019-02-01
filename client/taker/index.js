import React from "react";
import ReactDOM from "react-dom";
import { Button, Input } from "react-materialize";
import QuestionHolder from "./components/QuestionsHolder.jsx";

class App extends React.Component {
  handleSubmit() {
    let answers = document.getElementsByClassName("questions");
    console.log(answers);
    for (let q of answers) {
      console.log("Question is: ", q.children[0]);
      switch (q.children[1].children[0].className) {
        case "col input-field":
          console.log("range");
          console.log(q.children[1].children[0].children[0].value);
          break;
        case "order":
          console.log("order");
          break;
        case "row multichoice":
          console.log("multichoice");
          for (let a of q.children[1].children[0].children) {
            if (a.children[0].checked) {
              console.log(a.children[0].value);
            }
          }
          break;
        case "row boolean":
          console.log("boolean");
          let ans = q.children[1].children[0].children[0].children[0].checked
            ? true
            : false;
          console.log(ans);
          break;
        default:
          console.log("not supported input");
          break;
      }
    }
  }

  render() {
    return (
      <div>
        <h2>Take your Survey!</h2>
        <QuestionHolder />
        <Button
          waves="light"
          type="submit"
          name="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
