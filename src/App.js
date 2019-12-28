import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventScreen from "./Screens/EventScreen/index.js";
import HomeScreen from "./Screens/HomeScreen";
import SignInScreen from "./Screens/SignInScreen";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/event/:eventID" component={EventScreen} />
          <Route path="/event/:eventID/signIn" component={SignInScreen} />
        </Router>
      </div>
    );
  }
}
