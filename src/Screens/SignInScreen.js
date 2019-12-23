import React, { useState } from "react";
import UserProfileForm from "../Components/UserProfileForm";
import { Provider } from "../Components/Context";

class SignInScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {eventID: this.props['match']['params']['eventID']}
  }
  render(){
    return(
      <div className="body">
      <Provider eventID = {this.state.eventID}>
        <UserProfileForm eventID = {this.state.eventID}/>
      </Provider>
      </div>
    )
    };
}

export default SignInScreen;
