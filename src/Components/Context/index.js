import React, { Component } from "react";
import * as firebase from "firebase";

const EventContext = React.createContext();

// Configure Firebase connection
const firebaseConfig = {
  apiKey: "AIzaSyDnqt60iLw9jrqT8joxycfW9SNI_d-7ZWg",
  authDomain: "gathertest-c692e.firebaseapp.com",
  databaseURL: "https://gathertest-c692e.firebaseio.com",
  projectId: "gathertest-c692e",
  storageBucket: "gathertest-c692e.appspot.com",
  messagingSenderId: "648935776885",
  appId: "1:648935776885:web:f77938703ecb0e1f7f4e3c"
};

export class Provider extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(firebaseConfig);

    this.state = {
      data: {
        title: null,
        participants: null,
        min: null,
        max: null,
        description: null,
        deadline: null,
        organizer: null,
        when: null,
        guests: []
      }
    };
  }
  // Get event data from real time Firebase database
  getEventData = () => {
    let ref = firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log("DATA RETRIEVED");
  };

  componentDidMount() {
    this.getEventData();
  }

  render() {
    return (
      <EventContext.Provider
        value={{
          data: this.state.data,
          guests: this.state.guests
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}
export const Consumer = EventContext.Consumer;
