import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Home.css'

class Home extends Component {

  componentDidMount() {
    const video = document.getElementById('video')
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
    if (navigator.getUserMedia) {       
      navigator.getUserMedia({video: true}, (stream) => {
        video.src = window.URL.createObjectURL(stream)
      }, (error) => {
        //do something
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="home-middle-wrapper">
          <p className="home-title">MORTE</p>
          <p className="home-description"><p className="lower-inline">MO</p>nitor <p className="lower-inline">R</p>eal<p className="lower-inline">T</p>ime <p className="lower-inline">E</p>motion</p>
          <div className="home-button-wrapper">
            <Button bsStyle="success" className="start-button" onClick={() => this.props.changePage('live')}>Start</Button>
            <Button bsStyle="info" className="load-button">Load</Button>
          </div>
        </div>
        <div className="video-mask" />
        <video
          autoPlay="true"
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
