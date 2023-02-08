// Reducer form via useReducer
export const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_VALIDATION":
      const updatedInputValue = {
        ...state.inputValues,
        [action.input]: action.value,
      };

      const updatedIsValidInput = {
        ...state.isValidInput,
        [action.input]: action.isValid,
      };

      let upDatedFormIsValid = true;

      for (const key in updatedIsValidInput) {
        upDatedFormIsValid = upDatedFormIsValid && updatedIsValidInput[key];
      }

      return {
        ...state,
        inputValues: updatedInputValue,
        isValidInput: updatedIsValidInput,
        isValidForm: upDatedFormIsValid,
      };

    default:
      return state;
  }
};
