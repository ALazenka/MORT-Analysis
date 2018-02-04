import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Live.css'
import D3Chart from '../../Components/D3Chart/D3Chart'

class Live extends Component {
  constructor() {
    super();
    this.state= {
      startTime: Date.now(),
      elapsed: 0,
      pause: false,
      pauseTime: 0,
      pauseBtnTxt: "Pause"
    }
  }

  componentWillMount() {
    const startTime = new Date()
    this.setState({
      startTime
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  pauseSession() {
    if (this.state.pause) {
      console.log("I am now going!");
      this.setState({
        pauseBtnTxt: "Pause"
      })
      const startTime = new Date()
      this.setState({
        startTime
      })
    }
    else {
      this.setState({
        pauseBtnTxt: "Continue",
        pauseTime: this.state.elapsed
      })
    }
    this.setState({
      pause: !this.state.pause
    })
  }

  endSession() {
    console.log("End Session");
  }

  tick() {
    this.setState({
      elapsed: Date.now() - this.state.startTime
    })
  }
      
  render() {
    var elapsed = Math.round(this.state.elapsed / 100)
    var display = (elapsed/10).toFixed(1)
    return(
      <div className="live">
        <div className="top-row">
          <div className="timer">
            {Math.floor(display/60)}:{("0" + Math.round(display%60)).substr(-2)}
          </div>
          <div className="viewer-count">
          </div>
          <div className="timer-buttons">
            <Button bsStyle="warning" className="pause" onClick={() => this.pauseSession()}>{this.state.pauseBtnTxt}</Button>
            <Button bsStyle="danger" className="stop" onClick={() => this.endSession()}>Stop</Button>
          </div>
        </div>
        <div className="live-analytics">
          <div className="analytics-box-1"></div>
          <div className="analytics-box-2"></div>
          <div className="analytics-box-3"></div>
          <div className="analytics-box-4"></div>
          <div className="analytics-box-5"></div>
          <div className="analytics-box-6"></div>
          <div className="analytics-box-7"></div>
          <div className="analytics-box-8"></div>
        </div>
        <D3Chart className="graph" />
      </div>
    )
  }
}
export default Live;