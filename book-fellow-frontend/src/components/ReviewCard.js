import React from "react";

const ReviewCard = ({ reviews }) => {
  return (
    <div>
      {reviews.map(r => (
        <li>
          {r.content} {r.rating}
        </li>
      ))}
    </div>
  );
};

export default ReviewCard;

// css for reviews
