import React, { useState } from "react";
import { db } from "../../firebase";
import * as firebase from "firebase";
import "./UserForm.scss";
import "../Common/Buttons.scss";
import { Link } from "react-router-dom";

// Vi vill nu kunna ta in props i UserProfile, för att kunna få eventID

const UserProfileForm = eventID => {
  const [User, setUser] = useState({
    name: "",
    phone: "",
    payed: false
  });
  const handleSubmit = e => {
    e.preventDefault();

    db.doc("events/".concat(eventID.eventID)).update({
      guests: firebase.firestore.FieldValue.arrayUnion(User)
    });
    setUser({
      name: "",
      phone: "",
      payed: false
    });
  };

  const handleChange = e => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h6>New User</h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={User.name}
          onChange={handleChange}
          placeholder="Full name"
          required
        />
        <input
          type="text"
          id="phone"
          name="phone"
          value={User.phone}
          onChange={handleChange}
          placeholder="Phone number"
          required
        />
        <button className="submit-button" type="submit">
          Done
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
