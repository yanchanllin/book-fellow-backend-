import React from "react";
import BookForm from "./BookForm";
import { updateBook } from "../actions/bookForm";
import { setFormDataForEdit } from "../actions/bookForm";
import { connect } from "react-redux";

class EditBookFormWrapper extends React.Component {
  componentDidMount() {
    this.props.book && this.props.setFormDataForEdit(this.props.book);
  }

  handleSubmit = (event, formData, userId, history) => {
    const { updateBook, book } = this.props;
    event.preventDefault();
    console.log("in handleSubmit, event is ", event);
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
    return <BookForm editMode history={history} handleSubmit={handleSubmit} />;
  }
}

export default connect(
  null,
  { updateBook, setFormDataForEdit }
)(EditBookFormWrapper);
