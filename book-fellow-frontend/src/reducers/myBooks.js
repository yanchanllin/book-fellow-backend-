export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_BOOKS":
      return action.books;
    default:
      return state;
  }
};
