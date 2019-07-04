const initialState = {
  content: "",
  rating: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_REVIEW_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      };
      return returnVal;
    case "RESET_NEW_REVIEW_FORM":
      return initialState;
    default:
      return state;
  }
};
