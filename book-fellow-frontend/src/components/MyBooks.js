import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

class MyBooks extends React.Component {

  render() {
    const bookCards = this.props.books.map((b) => (
      <>
        <Card
          key={b.id}
          b={b}
          style={{
            width: "16rem"
          }}
        >
          <Card.Body>
            <Card.Title>"{b.attributes.name}"</Card.Title>
            <Card.Text>By: {b.attributes.author}</Card.Text><Link to={`/books/${b.id}`}>...more</Link>
          </Card.Body>
        </Card>
        <br />
      </>
    ));

    return (
      <div>
        <h1 align="center">All Books:</h1>
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
  mapStateToProps
)(MyBooks);


