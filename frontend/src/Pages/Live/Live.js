import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Live.css'
import D3Chart from '../../Components/D3Chart/D3Chart'

class Live extends Component {
  constructor() {
    super();
    this.averages = {
      anger: 0,
      contempt: 0,
      disgust: 0,
      fear: 0,
      happiness: 0,
      neutral: 0,
      sadness: 0,
      surprise: 0,
    };
    this.state= {
      startTime: Date.now(),
      elapsed: 0,
      pause: false,
      pauseTime: 0,
      pauseBtnTxt: "Pause",
      captureSnapshotCounter: 0
    }
  }

  componentWillMount() {
    const startTime = new Date()
    this.setState({
      startTime
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  pauseSession() {
    if (this.state.pause) {
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
    if (!this.state.pause){
      const { captureSnapshotCounter } = this.state
      if (captureSnapshotCounter % 3 === 0) {
        this.setState({
          captureSnapshotCounter: this.state.captureSnapshotCounter + 1
        })
      } else {
        this.setState({
          captureSnapshotCounter: captureSnapshotCounter + 1
        })
      }
      this.setState({elapsed: Date.now() - this.state.startTime + this.state.pauseTime});
    }
  }

  setAverages(avgArray) {
    this.averages["anger"] = avgArray['sumScoreMaps']["anger"] * 1.0 / avgArray['audienceCnt'] || 0;
    this.averages["contempt"] = avgArray['sumScoreMaps']["contempt"] * 1.0 / avgArray['audienceCnt'] || 0;
    this.averages["disgust"] = avgArray['sumScoreMaps']["disgust"] * 1.0 / avgArray['audienceCnt'] || 0;
    this.averages["fear"] = avgArray['sumScoreMaps']["fear"] * 1.0 / avgArray['audienceCnt'] || 0;
    this.averages["happiness"] = avgArray['sumScoreMaps']["happiness"] * 1.0 / avgArray['audienceCnt'] || 0;
    this.averages["neutral"] = avgArray['sumScoreMaps']["neutral"] * 1.0 / avgArray['audienceCnt'] || 0;
    this.averages["sadness"] = avgArray['sumScoreMaps']["sadness"] * 1.0 / avgArray['audienceCnt'] || 0;
    this.averages["surprise"] = avgArray['sumScoreMaps']["surprise"] * 1.0 / avgArray['audienceCnt'] || 0;
  }
      
  render() {
    var elapsed = Math.round(this.state.elapsed / 100)
    var display = (elapsed/10).toFixed(1)
    return (
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
          <div
            className="analytics-box-1"
            style={{ backgroundColor: ("rgba(230, 0, 0, " + this.averages["anger"] + ")")}}>
            <p>Anger</p><p>{(parseInt(this.averages['anger'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
          </div>
          <div
            className="analytics-box-2"
            style={{ backgroundColor: ("rgba(255, 102, 0, " + this.averages["contempt"] + ")")}}>
            <p>Contempt</p><p>{(parseInt(this.averages['contempt'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
          </div>
          <div
            className="analytics-box-3"
            style={{ backgroundColor: ("rgba(0, 0, 102, " + this.averages["disgust"] + ")")}}>
            <p>Disgust</p><p>{(parseInt(this.averages['disgust'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
          </div>
          <div
            className="analytics-box-4"
            style={{ backgroundColor: ("rgba(230, 230, 0, " + this.averages["fear"] + ")")}}>
            <p>Fear</p><p>{(parseInt(this.averages['fear'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
          </div>
          <div
            className="analytics-box-5"
            style={{ backgroundColor: ("rgba(42, 190, 42, " + this.averages["happiness"] + ")")}}>
            <p>Happiness</p><p>{(parseInt(this.averages['happiness'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
          </div>
          <div
            className="analytics-box-6"
            style={{ backgroundColor: ("rgba(128, 128, 128, " + this.averages["neutral"] + ")")}}>
            <p>Neutral</p><p>{(parseInt(this.averages['neutral'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
          </div>
          <div
            className="analytics-box-7"
            style={{ backgroundColor: ("rgba(0, 172, 230, " + this.averages["sadness"] + ")")}}>
            <p>Sadness</p><p>{(parseInt(this.averages['sadness'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
          </div>
          <div
            className="analytics-box-8"
            style={{ backgroundColor: ("rgba(153, 0, 204, " + this.averages["surprise"] + ")")}}>
            <p>Surprise</p><p>{(parseInt(this.averages['surprise'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
          </div>
        </div>
        <D3Chart
          className="graph"
          captureSnapshotCounter={this.state.captureSnapshotCounter}
          updateGlobalStorage={(chartValues) => this.updateGlobalChart(chartValues)}
          setAverages={(avgArray) => this.setAverages(avgArray)}
        />
      </div>
    )
  }
}

export default Live;