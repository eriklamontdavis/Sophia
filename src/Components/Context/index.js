import React, { Component, useState, useEffect } from "react";
import { db } from "../../firebase";

const EventContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventID: this.props.eventID,
      data: {
        title: null,
        participants: null,
        min: null,
        max: null,
        description: null,
        deadline: null,
        organizer: null,
        location: null,
        time: null,
        guests: []
      }
    };
  }
  componentDidMount() {
    let eventRef = db.collection("events").doc(this.state.eventID);
    let getDoc = eventRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          this.setState({
            data: doc.data()
          });
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  }

  render() {
    return (
      <EventContext.Provider
        value={{
          data: this.state.data,
          guests: this.state.data.guests
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}
export const Consumer = EventContext.Consumer;
