import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Home.css'

class Home extends Component {

  componentWillMount() {
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
        <Button bsStyle="success" className="start-button" onClick={() => this.props.changePage('live')}>Start!</Button>
        <div className="video-mask" />
        <video autoPlay="true" id="video" className="video-element" />
      </div>
    );
  }
}

export default Home;
