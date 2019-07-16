const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_BOOKS":
      return action.books;
    case "ADD_BOOK":
      return state.concat(action.book);
    case "UPDATE_BOOK":
      return state.map(book =>
        book.id === action.book.id ? action.book : book
      );
    case "CLEAR_BOOKS":
      return initialState;
    case "DELETE_BOOK_SUCCESS":
      return state.filter(book => book.id !== action.id);

    default:
      return state;
  }
};
