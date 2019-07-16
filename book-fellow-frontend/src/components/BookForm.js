import React from "react";

import { connect } from "react-redux";
import { updateBookForm } from "../actions/bookForm.js";

const BookForm = ({
  formData,
  updateBookForm,
  userId,
  book,
  handleSubmit,
  editMode
}) => {
  const { name, author, description } = formData;

  const handleChange = event => {
    const { name, value } = event.target;
    updateBookForm(name, value);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(formData, userId);
      }}
    >
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
      <input type="submit" value={editMode ? "Update Book" : "Create Book"} />
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
  { updateBookForm }
)(BookForm);
