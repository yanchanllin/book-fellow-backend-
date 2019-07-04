// sync actions

export const updateNewBookForm = (name, value) => {
  const formData = { name, value };
  return {
    type: "UPDATE_NEW_BOOK_FORM",
    formData
  };
};

export const resetNewBookForm = () => {
  return {
    type: "RESET_NEW_BOOK_FORM"
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
