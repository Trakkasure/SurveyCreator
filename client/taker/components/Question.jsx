import React from "react";

import Answers from "./Answers.jsx";


export default Question(props) {
  return (
    <div>
      <h2>{this.props.data.question}</h2>
      <Answers answers={this.props.data.answers} />
    </div>
  );
}
