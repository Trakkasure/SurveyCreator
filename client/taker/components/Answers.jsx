import React from "react";

const keyGen = () => {
  let uuid = Math.random() * 10;
  return uuid;
};
const consoleLog = e => {
  console.log(e.target.name, ": ", e.target.value); //can use name to store question name
  // this.props.stateChange(e);
};

const dispatcher = () => {};

const handleData = question => {
  switch (question.type) {
    case "fv":
      return (
        <p
          key={keyGen()}
          className="range-field"
          style={{ width: 25 + "%", margin: 25 + "px" }}
        >
          <input
            type="range"
            name={question.question}
            min={question.min}
            max={question.max}
            onChange={consoleLog}
          />
        </p>
      );
    case "boolean":
      return (
        <div className="boolean">
          <label key={keyGen()}>
            <input
              name={question.question}
              type="radio"
              value="true"
              onClick={consoleLog}
            />
            <span>True</span>
          </label>
          <br />
          <label key={keyGen()}>
            <input
              name={question.question}
              type="radio"
              value="false"
              onClick={consoleLog}
            />
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
              <label key={keyGen()}>
                <input
                  key={keyGen()}
                  name={question.question}
                  type="radio"
                  value={data}
                  onClick={consoleLog}
                />
                <span>{data}</span>
                <br />
              </label>
            );
          })}
        </div>
      );
  }
};

const Answers = props => {
  return <div>{handleData(props.data)} </div>;
};

export default Answers;
