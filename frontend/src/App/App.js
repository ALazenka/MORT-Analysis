import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import logo from '../logo.svg'
import './App.css'

class App extends Component {

  componentDidMount() {
    const video = document.querySelector("#videoElement")
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
        <Button bsStyle="success" className="start-button">Start!</Button>
        <div className="video-mask" />
        <video autoPlay="true" id="videoElement" className="video-element" />
      </div>
    );
  }
}

export default App;
