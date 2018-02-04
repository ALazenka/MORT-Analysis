import React, { Component } from 'react'
import './Live.css'

class Live extends Component {
  constructor() {
    super();
    this.averages = {
      red: .5,
      contempt: .7,
      disgust: 1,
      fear:.6,
      happiness:1,
      neutral:1,
      sadness:1,
      suprise:1,
    };
    this.state= {
      startTime: Date.now(),
      elapsed: 0
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

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      elapsed: Date.now() - this.state.startTime
    })
  }

  gridColour(dictionary){
    
  }
      
  render() {
    console.log(("rgba(230, 0, 0, " + this.averages["red"] + ")"))
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
          </div>
        </div>
        <div className="live-analytics">
          <div className="analytics-box-1" style={{ backgroundColor: ("rgba(230, 0, 0, " + this.averages["red"] + ")")}}></div>
          <div className="analytics-box-2" style={{ backgroundColor: ("rgba(255, 102, 0, " + this.averages["contempt"] + ")")}}></div>
          <div className="analytics-box-3" style={{ backgroundColor: ("rgba(0, 0, 102, " + this.averages["disgust"] + ")")}}></div>
          <div className="analytics-box-4" style={{ backgroundColor: ("rgba(230, 230, 0, " + this.averages["fear"] + ")")}}></div>
          <div className="analytics-box-5" style={{ backgroundColor: ("rgba(42, 190, 42, " + this.averages["happiness"] + ")")}}></div>
          <div className="analytics-box-6" style={{ backgroundColor: ("rgba(128, 128, 128, " + this.averages["neutral"] + ")")}}></div>
          <div className="analytics-box-7" style={{ backgroundColor: ("rgba(0, 172, 230, " + this.averages["sadness"] + ")")}}></div>
          <div className="analytics-box-8" style={{ backgroundColor: ("rgba(153, 0, 204, " + this.averages["suprise"] + ")")}}></div>
        </div>
      </div>
    )
  }
}
export default Live;