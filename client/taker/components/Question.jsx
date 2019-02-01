import React from "react";

import Answers from "./Answers.jsx";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="questions">
        <h3>{this.props.data.question}</h3>
        <Answers data={this.props.data} />
      </div>
    );
  }
}
export default Question;
