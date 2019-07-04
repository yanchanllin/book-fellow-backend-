const initialState = {
  name: "",
  author: "",
  description: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_BOOK_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      };
      return returnVal;
    case "RESET_NEW_BOOK_FORM":
      return initialState;
    default:
      return state;
  }
};
