import React from "react";
import MyBooks from "./MyBooks.js";
import BookForm from "./BookForm.js";

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <MyBooks />
      <BookForm />
    </div>
  );
};

export default MainContainer;
