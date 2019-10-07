import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard.js";

class BookCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const book = this.props.book
    const deleteBook = this.props.deleteBook
    return book ? (
      <div>
        <h3> Title: "{book.attributes.name}" </h3>
        <li>
          By: {book.attributes.author} <br />
          [Description: {book.attributes.description}]
        {/* Review:{" "} */}
          <ReviewCard reviews={book.attributes.reviews} />
        </li>
        <br />
        <Link to={`/books/${book.id}/edit`}>Edit this book</Link>
        <br />
        <button onClick={() => deleteBook(book.id)}>DELETE</button>
      </div>
    ) : (
        <p>This the the BOOK card with no BOOK!</p>
      );
  }
};

export default BookCard;

//This page is for css of books
//going to add a handlesubmit and handlechange to add review here not finish yet. 