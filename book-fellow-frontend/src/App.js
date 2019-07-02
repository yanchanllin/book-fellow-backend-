import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import MainContainer from "./components/MainContainer.js";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import { Route, Switch, withRouter, Link } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCurrentUser }
  )(App)
);
