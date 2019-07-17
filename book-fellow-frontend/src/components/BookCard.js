import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard.js";
// import ReviewForm from "./ReviewForm.js";

class BookCard extends Component {
  render() {
    const { book, deleteBook } = this.props;
    console.log(this.props);
    return book ? (
      <div>
        <h3> Title: {book.attributes.name} </h3>
        <li>
          by: {book.attributes.author} <br />
          [description: {book.attributes.description}]
        </li>
        Review: <ReviewCard reviews={book.attributes.reviews} />
        {/* <ReviewForm /> */}
        <br />
        <Link to={`/books/${book.id}/edit`}>Edit this book</Link>
        <br />
        <button onClick={() => this.props.deleteBook(book.id)}>DELETE</button>
      </div>
    ) : (
      <p>This the the BOOK card with no BOOK!</p>
    );
  }
}

// const bookCard = {
//   marginTop: "20px",
//   marginLeft: "-110px",
//   width: "120%"
// };

export default BookCard;

// css for books
