import React from "react";
import "./InvitedBy.scss";
import TicketEdge from "../../Images/TicketEdge.svg";

const InvitedBy = props => (
  <div className="invitedBy">
    <p>Jesper wants you to join</p>
    <img src={TicketEdge} alt="TicketEdge" />
  </div>
);

export default InvitedBy;
