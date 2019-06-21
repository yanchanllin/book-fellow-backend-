import React from "react";
import BookCard from "./BookCard.js";
import { connect } from "react-redux";

const MyBooks = props => {
  const bookCards =
    props.books.length > 0
      ? props.books.map(b => <BookCard book={b} key={b.id} />)
      : null;

  return bookCards;
};

const mapStateToProps = state => {
  return {
    books: state.myBooks
  };
};
export default connect(mapStateToProps)(MyBooks);
