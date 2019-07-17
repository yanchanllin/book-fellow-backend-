import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../actions/myBooks.js";
import Card from "react-bootstrap/Card";

const MyBooks = (props, deleteBook) => {
  console.log(props);
  const bookCards =
    props.books.length > 0
      ? props.books.map(b => (
          <>
            <Card
              key={b.id}
              b={b}
              deleteBook={props.deleteBook}
              style={{
                width: "16rem"
              }}
            >
              <Card.Body>
                <Card.Title>{b.attributes.name}</Card.Title>
                <Card.Text>by: {b.attributes.author}</Card.Text>
                <Link to={`/books/${b.id}`}>Read more</Link>
              </Card.Body>
            </Card>
            <br />
          </>
        ))
      : null;

  return (
    <div>
      <h1 align="center">All Books</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        {bookCards}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    books: state.myBooks
  };
};

export default connect(
  mapStateToProps,
  { deleteBook }
)(MyBooks);
