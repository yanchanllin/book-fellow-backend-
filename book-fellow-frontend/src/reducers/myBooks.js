export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_BOOKS":
      return action.books;
    case "CLEAR_BOOKS":
      return [];
    default:
      return state;
  }
};
