import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout.js";

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      {currentUser ? (
        <strong> Welcome, {currentUser.attributes.username} </strong>
      ) : (
          ""
        )}
      <NavLink exact activeClassName="active" to="/books">
        | My Books{" | "}
      </NavLink>
      <NavLink exact activeClassName="active" to="/books/new">
        | New Book{" |"}
      </NavLink>
      {/* {currentUser ? <Logout /> : <Login />} */}
      {loggedIn ? (
        <>
          <Logout />
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  };
};

export default connect(mapStateToProps)(NavBar);
