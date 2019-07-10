import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard.js";
// import ReviewForm from "./ReviewForm.js";

const BookCard = ({ book }) => {
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
    </div>
  ) : (
    <p>This the the BOOK card with no BOOK!</p>
  );
};

export default BookCard;

// css for books
