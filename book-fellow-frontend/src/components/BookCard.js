import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard.js";
// import ReviewForm from "./ReviewForm.js";

const BookCard = ({ book, deleteBook }) => {
  return book ? (
    <div>
      <h3> Title: {book.attributes.name} </h3>
      <li>
        by: {book.attributes.author} <br />
        [description: {book.attributes.description}] Review:{" "}
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
};

// const bookCard = {
//   marginTop: "20px",
//   marginLeft: "-110px",
//   width: "120%"
// };

export default BookCard;

// css for books
