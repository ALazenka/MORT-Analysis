import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

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
    navigator.permissions.query({name:'geolocation'}).then(permissionStatus => {
      console.log(permissionStatus)
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <video autoPlay="true" id="videoElement" />
        </p>
      </div>
    );
  }
}

export default App;
