import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import MainContainer from "./components/MainContainer.js";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import MyBooks from "./components/MyBooks.js";
import BookForm from "./components/BookForm.js";
// import ReviewForm from "./components/ReviewForm.js";
import BookCard from "./components/BookCard.js";
import { Route, Switch, withRouter, Link } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    const { loggedIn, books } = this.props;
    return (
      <div className="App">
        {loggedIn ? <NavBar /> : <Login />}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/books" component={MyBooks} />
          <Route exact path="/books/new" component={BookForm} />
          <Route
            exact
            path="/books/:id"
            render={props => {
              const book = books.find(
                book => book.id === props.match.params.id
              );
              console.log(book);
              return <BookCard book={book} {...props} />;
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
    { getCurrentUser }
  )(App)
);
