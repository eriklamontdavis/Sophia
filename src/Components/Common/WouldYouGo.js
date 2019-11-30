import React from "react";
import "./WouldYouGo.scss";
import "./Buttons.scss";

const WouldYouGoModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

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
          <button className="modalButton">I'm committed</button>
          <button className="secondaryButtonAlt" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
      <div className="whiteOverlay" />
    </div>
  );
};

export default WouldYouGoModal;
