import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventScreen from "./Screens/EventScreen";
import Ya from "./Screens/EventScreenTwo.js";
import HomeScreen from "./Screens/HomeScreen";
import SignInScreen from "./Screens/SignInScreen";
import LoadingScreen from "./Components/Common/LoadingScreen.js";

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
          <Route path="/ya" component={Ya} />
          <Route path="/signin" component={SignInScreen} />
        </Router>
      </div>
    );
  }
}
