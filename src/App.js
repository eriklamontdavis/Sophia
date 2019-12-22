import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventScreen from "./Screens/EventScreen";

import HomeScreen from "./Screens/HomeScreen";
import SignInScreen from "./Screens/SignInScreen";
import GuestListScreen from "./Screens/GuestListScreen";

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
          <Route path="/event" component={EventScreen} />
          <Route path="/guestlist" component={GuestListScreen} />
          <Route path="/signin" component={SignInScreen} />
        </Router>
      </div>
    );
  }
}
