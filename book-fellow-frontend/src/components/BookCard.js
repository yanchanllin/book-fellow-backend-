import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookCard extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      comments: this.state.comments.concat(this.state.value),
      value: ""
    })
  }
  render() {
    const { book, deleteBook } = this.props
    return book ? (
      <>
        <div>
          <h3> Title: "{book.attributes.name}" </h3>
          <li>
            By: {book.attributes.author} <br />
            [Description: {book.attributes.description}]
        </li>
          <br />
          <Link to={`/books/${book.id}/edit`}>Edit this book</Link>
          <br />
          <button onClick={() => deleteBook(book.id)}>DELETE</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value}
            onChange={this.handleChange} />
          <input type="Submit" value="add comment" />
        </form>
        {this.state.comments.map(comment => (
          <p>{comment}</p>
        ))}
      </>
    ) : (
        <p>This the the card with no book!</p>
      );
  }
}

export default BookCard; 