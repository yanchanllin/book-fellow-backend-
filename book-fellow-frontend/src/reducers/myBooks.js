export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_BOOKS":
      return action.books;
    case "ADD_BOOK":
      return state.concat(action.book);
    case "UPDATE_BOOK":
      return state;
    case "CLEAR_BOOKS":
      return [];
    case "DELETE_BOOK_SUCCESS":
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.id)
      };
    default:
      return state;
  }
};
