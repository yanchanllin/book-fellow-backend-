import React from "react";
import BookForm from "./BookForm";
import { updateBook } from "../actions/bookForm";
import { setFormDataForEdit, resetNewBookForm } from "../actions/bookForm";
import { connect } from "react-redux";

class EditBookFormWrapper extends React.Component {
  componentDidMount() {
    this.props.book && this.props.setFormDataForEdit(this.props.book);
  }

  componentDidUpdate(prevProps) {
    this.props.book &&
      !prevProps.book &&
      this.props.setFormDataForEdit(this.props.book);
  }

  componentWillUnmount() {
    this.props.resetNewBookForm();
  }

  handleSubmit = (formData, userId) => {
    const { updateBook, book, history } = this.props;

    updateBook(
      {
        ...formData,
        bookId: book.id,
        userId
      },
      history
    );
  };

  render() {
    const { history, handleSubmit } = this.props;
    return <BookForm editMode handleSubmit={this.handleSubmit} />;
  }
}

export default connect(
  null,
  { updateBook, setFormDataForEdit, resetNewBookForm }
)(EditBookFormWrapper);
