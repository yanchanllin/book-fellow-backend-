import React from "react";

import { connect } from "react-redux";
import { updateNewBookForm } from "../actions/bookForm.js";
import { createBook } from "../actions/bookForm.js";

const BookForm = ({
  formData,
  history,
  updateNewBookForm,
  createBook,
  userId
}) => {
  const { name, author, description } = formData;

  const handleChange = event => {
    const { name, value } = event.target;
    updateNewBookForm(name, value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    createBook({
      ...formData,
      userId,
      history
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={name}
      />
      <br />
      <input
        placeholder="author"
        name="author"
        onChange={handleChange}
        value={author}
      />
      <br />
      <input
        placeholder="description"
        name="description"
        onChange={handleChange}
        value={description}
      />
      <br />
      <input type="submit" value="Create Book" />
    </form>
  );
};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    formData: state.bookForm,
    userId
  };
};
export default connect(
  mapStateToProps,
  { updateNewBookForm, createBook }
)(BookForm);
