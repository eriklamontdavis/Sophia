import React from "react";
import "./UserForm.scss";
import InputField from "./InputField.js";
import ConfirmButton from "./ConfirmButton.js";
import AddPhoto from "./AddPhoto.js";

class UserForm extends React.Component {
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  };

  fileUploadHandler = () => {};

  render() {
    return (
      <form className="form">
        <AddPhoto />
        <InputField />
        <ConfirmButton text="Confirm" />
      </form>
    );
  }
}

export default UserForm;
