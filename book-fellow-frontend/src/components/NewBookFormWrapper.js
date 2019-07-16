import React from "react";
import BookForm from "./BookForm";
import { createBook } from "../actions/bookForm";
import { connect } from "react-redux";

const NewBookFormWrapper = ({ history, createBook }) => {
  const handleSubmit = (formData, userId) => {
    createBook(
      {
        ...formData,
        userId
      },
      history
    );
  };
  return <BookForm history={history} handleSubmit={handleSubmit} />;
};

export default connect(
  null,
  { createBook }
)(NewBookFormWrapper);
