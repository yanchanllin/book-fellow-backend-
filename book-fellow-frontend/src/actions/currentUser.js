import { resetLoginForm } from "./loginForm.js";
import { getMyBooks, clearBooks } from "./myBooks.js";

//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  };
};

//asynchronous action creators
export const login = credentials => {
  // console.log("credentials are", credentials);
  return dispatch => {
    return fetch("https://book-fellow.herokuapp.com/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCurrentUser(response.data));
          dispatch(getMyBooks());
          dispatch(resetLoginForm());
        }
      })
      .catch(console.log);
  };
};

export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser());
    dispatch(clearBooks());
    return fetch("https://book-fellow.herokuapp.com/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    });
  };
};

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("https://book-fellow.herokuapp.com/api/v1/get_current_user", {
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
          dispatch(setCurrentUser(response.data));
          dispatch(getMyBooks());
        }
      })
      .catch(console.log);
  };
};
