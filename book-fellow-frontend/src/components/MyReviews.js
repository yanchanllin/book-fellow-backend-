import React from "react";
import ReviewCard from "./ReviewCard.js";
import { connect } from "react-redux";

const Reviews = props => {
  const reviewCards =
    props.reviews.length > 0
      ? props.reviews.map(r => <ReviewCard review={r} key={r.id} />)
      : null;

  return reviewCards;
};

const mapStateToProps = state => {
  return {
    reviews: state.myReviews
  };
};
export default connect(mapStateToProps)(Reviews);
