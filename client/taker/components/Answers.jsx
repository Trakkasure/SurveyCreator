import React from "react";

import { Row, Input } from "react-materialize";

import { DragSource, DropTarget } from "react-dnd";

class Answers extends React.Component {
  constructor(props) {
    super(props);
  }

  handleData(question) {
    switch (question.type) {
      case "fv":
        return (
          <Input
            type="range"
            className="range"
            min={question.min}
            max={question.max}
          />
        );
      case "boolean":
        return (
          <Row className="boolean">
            <Input
              name="boolean"
              type="radio"
              name={question.key}
              value="True"
              label="True"
            />
            <Input
              name="boolean"
              type="radio"
              name={question.key}
              value="False"
              label="False"
            />
          </Row>
        );
      case "op":
        return (
          <div className="order">
            {question.answers.map(data => {
              return data;
            })}
          </div>
        );
      case "mc":
        return (
          <Row className="multichoice">
            {question.answers.map(data => {
              return (
                <Input
                  name={question.question}
                  type="radio"
                  value={data}
                  label={data}
                />
              );
            })}
          </Row>
        );
    }
  }

  render() {
    return <div>{this.handleData(this.props.data)} </div>;
  }
}
export default Answers;
