const initState = { questions: {} };

const changeInput = (state = initState, action) => {
  console.log(action, "\n", state);
  if (action.type == "EDIT_BOOL") {
    console.log("editing Boolean question!");
    return Object.assign({}, state, {
      questions: { bool: action.bool, question: action.question }
    });
  } else {
    return state;
  }
};

export default changeInput;
