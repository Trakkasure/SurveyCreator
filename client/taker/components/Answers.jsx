import React from "react";
class Answers extends React.Component {
  constructor(props) {
    super(props);
  }

  keyGen() {
    let uuid = Math.random() * 10;
    return uuid;
  }

  handleData(question) {
    switch (question.type) {
      case "fv":
        return (
          <p key={this.keyGen()} className="range">
            <input
              type="range"
              min={question.min}
              max={question.max}
              style={{ width: 25 + "%", margin: 25 + "px" }}
            />
          </p>
        );
      case "boolean":
        return (
          <div className="boolean">
            <label key={this.keyGen()}>
              <input name={question.key} type="radio" value="true" />
              <span>True</span>
            </label>
            <br />
            <label key={this.keyGen()}>
              <input name={question.key} type="radio" value="false" />
              <span>False</span>
            </label>
          </div>
        );
      case "op": // TO DO: Need to figure out what and how to do this.
        return (
          <div className="order">
            {question.answers.map(data => {
              return data;
            })}
          </div>
        );
      case "mc":
        return (
          <div className="multichoice">
            {question.answers.map(data => {
              return (
                <label key={this.keyGen()}>
                  <input
                    key={this.keyGen()}
                    name={question.question}
                    type="radio"
                    value={data}
                  />
                  <span>{data}</span>
                  <br />
                </label>
              );
            })}
          </div>
        );
    }
  }

  render() {
    return <div>{this.handleData(this.props.data)} </div>;
  }
}
export default Answers;
