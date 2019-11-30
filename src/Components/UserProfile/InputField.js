import React from "react";
import "./InputField.scss";

//TODO This imput field is only static, without any functionality.

const InputField = props => (
  <div className="form">
    <label>
      <input type="text" name="name" placeholder="Enter full name" />
    </label>
  </div>
);

export default InputField;
