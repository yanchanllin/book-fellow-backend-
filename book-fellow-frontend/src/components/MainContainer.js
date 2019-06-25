import React from "react";
import MyBooks from "./MyBooks.js";
import MyReviews from "./MyReviews.js";

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <MyBooks />
      <MyReviews />
    </div>
  );
};

export default MainContainer;
