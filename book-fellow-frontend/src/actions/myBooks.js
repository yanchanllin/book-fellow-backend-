//synchronous actions
export const setMyBooks = books => {
  return {
    type: "SET_MY_BOOKS",
    books
  };
};

export const clearBooks = () => {
  return {
    type: "CLEAR_BOOKS"
  };
};

export const deleteBookSuccess = bookId => {
  return {
    type: "DELETE_BOOK_SUCCESS",
    id: bookId
  };
};

//async actions
export const getMyBooks = () => {
  return dispatch => {
    return fetch("https://book-fellow.herokuapp.com/api/v1/books", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setMyBooks(response.data));
        }
      })
      .catch(console.log);
  };
};

export function deleteBook(data) {
  return dispatch => {
    fetch(`https://book-fellow.herokuapp.com/api/v1/books/${parseInt(data)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response)
      .then(id => dispatch(deleteBookSuccess(data)));
  };
}
