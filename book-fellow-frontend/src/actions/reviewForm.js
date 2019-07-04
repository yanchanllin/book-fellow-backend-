//synchronous actions
export const updateNewReviewForm = (name, value) => {
  const formData = { name, value };
  return {
    type: "UPDATE_NEW_REVIEW_FORM",
    formData
  };
};

export const resetNewReviewForm = () => {
  return {
    type: "RESET_NEW_REVIEW_FORM"
  };
};

export const addReview = review => {
  return {
    type: "ADD_Review",
    review
  };
};

//async actions
export const createReview = (reviewData, history) => {
  return dispatch => {
    const sendableReviewData = {
      content: reviewData.content,
      rating: reviewData.rating,
      book_id: reviewData.bookId
    };
    return fetch("http://localhost:3000/api/v1/books/book_id/reviews", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableReviewData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(addReview(resp.data));
          dispatch(resetNewReviewForm());
          history.push(`/books/book_id/reviews/${resp.data.id}`);
        }
      })
      .catch(console.log);
  };
};
