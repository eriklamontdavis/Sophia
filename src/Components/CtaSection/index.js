import React from "react";
import "./CtaSection.scss";

import WouldGoButton from "../Common/WouldGoButton.js";

const CtaSection = props => (
  <div className="ctaSectionWrapper">
    <WouldGoButton text="I would go" />
    {/*<p className="orPara">Or if you've already joined...</p>
    <button className="secondaryButton">Sign in</button>*/}
  </div>
);

export default CtaSection;
