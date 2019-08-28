import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../actions/myBooks.js";
import Card from "react-bootstrap/Card";

class MyBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }
  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  render() {
    const bookCards = this.props.books.map(b => (
      <>
        <Card
          key={b.id}
          b={b}
          deleteBook={this.props.deleteBook}
          style={{
            width: "16rem"
          }}
        >
          <Card.Body>
            <Card.Title>{b.attributes.name}</Card.Title>
            <Card.Text>by: {b.attributes.author}</Card.Text>
            <Link to={`/books/${b.id}`}>Read more</Link>
            {/* <button onClick={this.handleClick}>
              {this.state.timesClicked}
            </button> */}
          </Card.Body>
        </Card>
        <br />
      </>
    ));

    return (
      <div>
        <h1 align="center">All Books</h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          {bookCards}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.myBooks
  };
};

export default connect(
  mapStateToProps,
  { deleteBook }
)(MyBooks);

// The functionality we’re looking for is simple search functionality.
// Add a search form at the top of the page, at least an input
// When the user types in the input, it should show any books whose author’s name contains
//  what the user has typed in
// If there is nothing in the search input, all books should display
// If no authors match the search input, no books should display
// Should update as the user types
// Once again, only one piece of state should be added - to represent the current value of the
// search input

// lifecyle -compoentwillmount removed why (details)
// constructor-auto run in the backgroud -
