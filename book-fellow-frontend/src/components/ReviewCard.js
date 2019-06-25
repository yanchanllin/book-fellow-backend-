import React from "react";
import { getMyReviews } from "../actions/myReviews";

const ReviewCard = ({ review }) => {
  return (
    <p>
      <b>comment:{review.content}</b>
      Rating:{review.rating}
      <br />
    </p>
  );
};

export default ReviewCard;

// css for reviews
