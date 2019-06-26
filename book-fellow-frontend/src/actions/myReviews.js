//synchronous actions
export const setMyReviews = reviews => {
  console.log("hi");
  return {
    type: "SET_MY_REVIEWS",
    reviews
  };
};

//async actions
export const getMyReviews = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/books/book_id/reviews", {
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
          dispatch(setMyReviews(response.data));
        }
      })
      .catch(console.log);
  };
};
