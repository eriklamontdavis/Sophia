import React from "react";
import "./WouldYouGo.scss";
import "./Buttons.scss";
import { Link } from "react-router-dom";
import { string } from "prop-types";

const WouldYouGoModal = ({ handleClose, show, eventID, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const redirect = eventID+"/signin"
  console.log(redirect)

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="wouldYouGoDiv">
          <div className="wouldYouGoTitleWrapper">
            <h1>Would you actually go?</h1>
            <p>
              You commit to go if this happening reaches it minimum guest limit.
            </p>
          </div>
          <Link to={{pathname: redirect}}>
            <button className="modalButton">I'm committed</button>
          </Link>
          <button onClick={handleClose} className="secondaryButtonAlt">
            Close
          </button>
        </div>
      </section>
      <div className="whiteOverlay" />
    </div>
  );
};

export default WouldYouGoModal;
