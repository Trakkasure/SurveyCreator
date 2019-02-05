import React from "react";
import ReactDOM from "react-dom";
import QuestionHolder from "./components/QuestionsHolder.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendData = this.sendData.bind(this);
  }
  handleSubmit() {
    let DOManswers = document.getElementsByClassName("questions");
    let dsa = {}; //DataStructureAnswers
    console.log(DOManswers);
    for (let q of DOManswers) {
      console.log("Question is: ", q.children[0]);
      const locationData = q.children[1].children[0];
      const locationQuestion = q.children[0].innerHTML;
      switch (q.children[1].children[0].className) {
        case "range":
          console.log("range");
          console.log(locationData.children[0].value);
          dsa[locationQuestion] = locationData.children[0].value;
          break;
        case "order":
          console.log("order: PLZ FIX");
          break;
        case "multichoice":
          console.log("multichoice");
          let answered = false;
          for (let a of q.children[1].children[0].children) {
            if (a.children[0].checked) {
              console.log(a.children[0].value);
              answered = true;
              dsa[locationQuestion] = a.children[0].value;
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
            dsa[locationQuestion] = true;
          } else if (
            q.children[1].children[0].children[2].children[0].checked
          ) {
            console.log("false");
            dsa[locationQuestion] = false;
          } else {
            console.log("please answer question: ", q.children[0].innerHTML);
          }
          break;
        default:
          console.log("not supported input");
          break;
      }
    }
    this.setState({ data: dsa }, () => {
      console.log("State: ", this.state.data);
      this.sendData();
    });
  }

  sendData() {
    axios.post("/postSurveyData", { data: this.state.data });
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
