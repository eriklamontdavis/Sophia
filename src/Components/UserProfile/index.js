import React, { useState } from "react";
import { db } from "../../firebase";
import "./UserForm.scss";
import "../Common/Buttons.scss";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [User, setUser] = useState({
    name: "",
    phone: "",
    payed: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    db.collection("users").add(User);
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
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={User.name}
          onChange={handleChange}
          placeholder="e.g. Charlie and the Chocolate Factory"
          required
        />
        <label htmlFor="name">Phone number</label>

        <input
          type="text"
          id="phone"
          name="phone"
          value={User.phone}
          onChange={handleChange}
          placeholder="Phone number"
          required
        />

        <Link className="secondaryButton" type="submit" to="/event">
          Done
        </Link>
      </form>
    </div>
  );
};

export default UserProfile;
