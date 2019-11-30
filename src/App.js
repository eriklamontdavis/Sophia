import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventScreen from "./Screens/EventScreen";
import HomeScreen from "./Screens/HomeScreen";
import SignIn from "./Screens/SignIn";
import UserSignUp from "./Screens/UserProfile";

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
          <Route path="/event/" component={EventScreen} />
          <Route path="/signin" component={SignIn} />
          <Route path="/user-profile" component={UserSignUp} />
        </Router>
      </div>
    );
  }
}
