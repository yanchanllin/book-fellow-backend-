// sync actions
export const updateBookForm = (name, value) => {
  const formData = { name, value };
  return {
    type: "UPDATE_BOOK_FORM",
    formData
  };
};

export const updateBookSuccess = book => {
  return {
    type: "UPDATE_BOOK",
    book
  };
};

export const resetNewBookForm = () => {
  return {
    type: "RESET_NEW_BOOK_FORM"
  };
};

export const setFormDataForEdit = book => {
  const bookFormData = {
    name: book.attributes.name,
    author: book.attributes.author,
    description: book.attributes.description
  };
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    bookFormData
  };
};

export const addBook = book => {
  return {
    type: "ADD_BOOK",
    book
  };
};
//async actions
export const createBook = (bookData, history) => {
  return dispatch => {
    const sendableBookData = {
      name: bookData.name,
      author: bookData.author,
      description: bookData.description,
      user_id: bookData.userId
    };
    return fetch("http://localhost:3000/api/v1/books", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableBookData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(addBook(resp.data));
          dispatch(resetNewBookForm());
          history.push(`/books/${resp.data.id}`);
        }
      })
      .catch(console.log);
  };
};

export const updateBook = (bookData, history) => {
  return dispatch => {
    const sendableBookData = {
      description: bookData.description,
      author: bookData.author,
      name: bookData.name,
      user_id: bookData.userId
    };
    return fetch(`http://localhost:3000/api/v1/books/${bookData.bookId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableBookData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(updateBookSuccess(resp.data));
          history.push(`/books/${resp.data.id}`);
        }
      })
      .catch(console.log);
  };
};
