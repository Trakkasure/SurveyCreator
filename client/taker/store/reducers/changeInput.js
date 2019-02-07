const initState = [];

const changeInput = (state = initState, action) => {
  let index;
  for (let i in state) {
    if (state[i].question == action.question) {
      index = i;
    }
  }
  switch (action.type) {
    case "EDIT_RANGE":
      if (index) {
        return (state[index].answer = action.number);
      }
      return [...state, { question: action.question, answer: action.number }];

    // case "EDIT_MULTI":
    //   console.log("editing Multi Question!");
    //   return [...state, { question: action.question, answer: action.answer }];

    // case "EDIT_ORDER":
    //   console.log("editing Order Question!");
    //   return Object.assign(
    //     {},
    //     state,
    //     (initState[action.question] = action.array)
    //   );
    default:
      return [...state];
  }
};
export default changeInput;
