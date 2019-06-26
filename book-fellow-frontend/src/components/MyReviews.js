import React, { Component } from "react";
import ReviewCard from "./ReviewCard.js";
import { connect } from "react-redux";
import { getMyReviews } from "../actions/myReviews.js";
import MyBooks from "./MyBooks.js";

class Review extends Component {
  componentDidMount = () => {
    this.props.getMyReviews(book_id);
  };
  render() {
    return (
      <div className="myReviews">
        <ReviewCard reviews={this.props.reviews(book_id)} />
      </div>
    );
  }
}

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
export default connect(
  mapStateToProps,
  { getMyReviews }
)(Reviews);
