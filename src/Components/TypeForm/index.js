import React from "react";
import { ReactTypeformEmbed } from "react-typeform-embed";
import "./TypeForm.scss";

class TypeForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="testing">
          <ReactTypeformEmbed url="https://erikdavis984230.typeform.com/to/RlsYwU" />
        </div>
      </React.Fragment>
    );
  }
}

export default TypeForm;
