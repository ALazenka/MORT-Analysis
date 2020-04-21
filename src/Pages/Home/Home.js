import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    const video = document.getElementById("video");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(() => {
        console.log("Something went wrong!");
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="home-middle-wrapper">
          <p className="home-title">MORTE</p>
          <div className="home-description">
            <p className="lower-inline">MO</p>nitor{" "}
            <p className="lower-inline">R</p>eal
            <p className="lower-inline">T</p>ime{" "}
            <p className="lower-inline">E</p>motion
          </div>
          <div className="home-button-wrapper">
            <Button
              bsStyle="success"
              className="start-button"
              onClick={() => this.props.changePage("live")}
            >
              Start
            </Button>
            <Button bsStyle="info" className="load-button">
              Load
            </Button>
          </div>
        </div>
        <div className="video-mask" />
        <video
          autoPlay={true}
          id="video"
          className="video-element"
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </div>
    );
  }
}

export default Home;
