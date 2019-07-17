import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import MainContainer from "./components/MainContainer.js";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import MyBooks from "./components/MyBooks.js";
import BookForm from "./components/BookForm.js";
// import ReviewForm from "./components/ReviewForm.js";
import BookCard from "./components/BookCard.js";
import NewBookFormWrapper from "./components/NewBookFormWrapper.js";
import EditBookFormWrapper from "./components/EditBookFormWrapper";
import { Route, Switch, withRouter } from "react-router-dom";
import { setFormDataForEdit } from "./actions/bookForm";
import { deleteBook } from "./actions/myBooks";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    const { loggedIn, books, setFormDataForEdit } = this.props;
    return (
      <div className="App">
        {loggedIn ? <NavBar /> : <Login />}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/books" component={MyBooks} />
          <Route exact path="/books/new" component={NewBookFormWrapper} />
          <Route
            exact
            path="/books/:id"
            render={props => {
              const book = books.find(
                book => book.id === props.match.params.id
              );

              return (
                <BookCard
                  book={book}
                  deleteBook={this.props.deleteBook}
                  {...props}
                />
              );
            }}
          />

          <Route
            exact
            path="/books/:id/edit"
            render={props => {
              const book = books.find(
                book => book.id === props.match.params.id
              );

              return <EditBookFormWrapper book={book} {...props} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    books: state.myBooks
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCurrentUser, setFormDataForEdit, deleteBook }
  )(App)
);
