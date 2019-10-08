import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
// import usersReducer from "./reducers/users.js";
import currentUser from "./reducers/currentUser.js";
import loginForm from "./reducers/loginForm.js";
import myBooks from "./reducers/myBooks.js";
import bookForm from "./reducers/bookForm.js";

const reducer = combineReducers({
  // users: usersReducer, //array of users
  currentUser,
  loginForm,
  myBooks,
  bookForm
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
