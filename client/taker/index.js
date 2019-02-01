import React from "react";
import ReactDOM from "react-dom";
import QuestionHolder from "./components/QuestionsHolder.jsx";

class App extends React.Component {
  handleSubmit() {
    let answers = document.getElementsByClassName("questions");
    console.log(answers);
    for (let q of answers) {
      console.log("Question is: ", q.children[0]);
      switch (q.children[1].children[0].className) {
        case "range":
          console.log("range");
          console.log(q.children[1].children[0].children[0].value);
          break;
        case "order":
          console.log("order");
          break;
        case "multichoice":
          console.log("multichoice");
          let answered = false;
          for (let a of q.children[1].children[0].children) {
            if (a.children[0].checked) {
              console.log(a.children[0].value);
              answered = true;
              break;
            }
          }
          if (!answered) {
            console.log("Please answer question: ", q.children[0].innerHTML);
          }
          break;
        case "boolean":
          console.log("boolean");
          if (q.children[1].children[0].children[0].children[0].checked) {
            console.log("true");
          } else if (
            q.children[1].children[0].children[2].children[0].checked
          ) {
            console.log("false");
          } else {
            console.log("please answer question: ", q.children[0].innerHTML);
          }
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
        <button
          className="btn waves-effect waves-light"
          id="submitButton"
          type="submit"
          name="action"
          onClick={this.handleSubmit}
        >
          Submit
          {/* <i className="material-icons right">send</i> */}
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
