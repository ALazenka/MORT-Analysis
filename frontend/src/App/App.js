import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Live from '../Live/Live'
import Home from '../Home/Home'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      isOnHome: false,
      isOnLive: true,
      isOnResults: false
    }
  }

  render() {
    if (this.state.isOnLive) {
      return <Live/>
    } 
    return <Home />
  }
}

export default App;
