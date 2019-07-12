import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard.js";
// import ReviewForm from "./ReviewForm.js";
import { deleteBookSuccess } from "../actions/myBooks";

const BookCard = ({ book, deleteBookSuccess }) => {
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
      <Link to={`/books`}>DELETE this book</Link>
    </div>
  ) : (
    <p>This the the BOOK card with no BOOK!</p>
  );
};

const bookCard = {
  marginTop: "20px",
  marginLeft: "-110px",
  width: "120%"
};

export default BookCard;

// css for books
