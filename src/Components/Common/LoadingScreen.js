import React from "react";
import "./LoadingScreen.scss";
import LoadingCard from "../../Images/loadingCard.svg";
import LoadingAnimation from "../../Images/LoadingAnimation.gif";

class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.isLoading){
            return(
            <div className="splash-screen">
                <img className="loadingAnimation" src={LoadingAnimation} />
                <img className="loadingCard" src={LoadingCard} />
            </div>
            )
        } else{
            return(
                <div>
                </div>
                )
        }
    }
}

export default LoadingScreen;