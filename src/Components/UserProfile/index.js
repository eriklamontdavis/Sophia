import React from "react";
import UserForm from "./UserForm.js";
import FormNav from "./FormNav.js";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormNav />
        <div className="container">
          <UserForm />
        </div>
      </div>
    );
  }
}

export default UserProfile;
