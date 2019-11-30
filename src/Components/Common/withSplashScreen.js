import React, { Component } from "react";
import "./withSplashScreen.scss";
import LoadingCard from "../../Images/loadingCard.svg";
import LoadingAnimation from "../../Images/LoadingAnimation.gif";

function LoadingMessage() {
  return (
    <div className="splash-screen">
      <div className="loadingDiv">
        <img className="loadingAnimation" src={LoadingAnimation} />
        <h2>Gather</h2>
        <p>Kickstart social gatherings.</p>
      </div>
      <img className="loadingCard" src={LoadingCard} />
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 15);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
