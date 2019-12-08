import React from "react";
import "./ProgressBar.scss";
import CheckmarkIcon from "../../Images/Checkmark.svg";
import styled, { keyframes } from "styled-components";

import { Consumer } from "../Context";

const WidthAnimation = props => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${props.percentage}%;
  }
`;

const Filler = styled.div`
  position: absolute;
  background: black;
  height: 100%;
  border-radius: inherit;
  box-shadow: var(--card-box-shadow);
  animation: ${WidthAnimation} 2s ease-in-out;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`;

function ProgressBar(props) {
  return (
    <div className="progressBarWrapper">
      <div className="progressBar">
        <div className="progressBarBG">
          <Filler percentage={props.percentage}> </Filler>
        </div>
      </div>
      <div className="goalIndicator">
        <img src={CheckmarkIcon} alt="Checkmark" />
      </div>
    </div>
  );
}

export default ProgressBar;
