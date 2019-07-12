import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MyBooks = (props, deleteBookSuccess) => {
  const bookCards =
    props.books.length > 0
      ? props.books.map(b => (
          <p key={b.id} b={b} deleteBookSuccess={deleteBookSuccess}>
            <Link to={`/books/${b.id}`}>{b.attributes.name}</Link>
          </p>
        ))
      : null;

  return bookCards;
};

const mapStateToProps = state => {
  return {
    books: state.myBooks
  };
};

export default connect(mapStateToProps)(MyBooks);
