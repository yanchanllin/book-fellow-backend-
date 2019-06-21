import React from "react";

const BookCard = ({ book }) => {
  return (
    <p>
      <b>Title:{book.attributes.name}</b> by:
      {book.attributes.author}
      <br /> [{book.attributes.description}]
    </p>
  );
};

export default BookCard;

// css for books
