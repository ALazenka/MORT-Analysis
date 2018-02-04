import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import "./Result.css"

class Result extends Component {
  constructor(){
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
  }

  render() {
    return (
      <div className="result">
        <div className="top-row">
          <div className="time">Session time:      14:37</div>
          <Button bsStyle="danger">Exit</Button>
        </div>
        <div className="data">
        </div>
        <div className="average-grid">
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
      </div>
    )
  }

}

export default Result