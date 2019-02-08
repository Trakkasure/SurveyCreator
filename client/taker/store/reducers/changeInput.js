const changeInput = (state = [], action) => {
  let newState = [...state];
  console.log("newState when state is coppied", newState);
  switch (action.type) {
    case "EDIT_RANGE":
      if (newState.length > 0) {
        for (let i in newState) {
          if (newState[i].question == action.question) {
            newState[i].answer = action.answer;
            return newState;
          }
        }
        console.log("didnt find question in state");
      }
      newState.push({
        question: action.question,
        answer: action.answer
      });
      console.log("Pushed new info to state: ", newState);
      return newState;
    case "EDIT_MULTI":
      console.log("editing Multi Question!");
      return [...state, { question: action.question, answer: action.answer }];

    // case "EDIT_ORDER":
    //   console.log("editing Order Question!");
    //   return Object.assign(
    //     {},
    //     state,
    //     (initState[action.question] = action.array)
    //   );
    default:
      return newState;
  }
};
export default changeInput;
