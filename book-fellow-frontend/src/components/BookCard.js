import React from "react";
import ReviewCard from "./ReviewCard.js";
// import ReviewForm from "./ReviewForm.js";

const BookCard = ({ book }) => {
  return (
    <div>
      <li>
        Title:{book.attributes.name} by:
        {book.attributes.author} <br />[ {book.attributes.description}]
        <ReviewCard reviews={book.attributes.reviews} />
        {/* <ReviewForm /> */}
      </li>
    </div>
  );
};

export default BookCard;

// css for books
