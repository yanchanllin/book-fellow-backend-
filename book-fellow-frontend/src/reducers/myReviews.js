export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_REVIEWS":
      return action.reviews;
    default:
      return state;
  }
};
