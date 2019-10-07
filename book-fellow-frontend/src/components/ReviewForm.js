import React from "react";
import { connect } from "react-redux";
import { updateNewReviewForm } from "../actions/reviewForm.js";
import { createReview } from "../actions/reviewForm.js";

const ReviewForm = ({
  formData,
  history,
  updateNewReviewForm,
  createReview,
  bookId
}) => {
  const { content, rating } = formData;

  const handleChange = event => {
    const { name, value } = event.target;
    updateNewReviewForm(name, value);
  };
};

const handleSubmit = event => {
  event.preventDefault();
  createReview({
    ...formData,
    bookId
  });
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="content"
        name="content"
        onChange={handleChange}
        value={content}
      />
      <br />
      <input
        placeholder="rating"
        name="rating"
        onChange={handleChange}
        value={rating}
      />
      <br />
      <input type="submit" value="Create Review" />
    </form>
  );
};

const mapStateToProps = state => {
  const bookId = state.book ? state.book.id : "";
  return {
    formData: state.reviewForm,
    bookId
  };
};
export default connect(
  mapStateToProps,
  { updateNewReviewForm, createReview }
)(ReviewForm);
// going to work on review form add review on bookcard for each book