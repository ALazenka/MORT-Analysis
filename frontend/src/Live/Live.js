import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Live.css'

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

    pauseSession(){
      if (this.state.pause){
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
        this.setState({pauseBtnTxt: "Continue"});
        this.setState({pauseTime: this.state.elapsed});
      }
      this.setState({pause: !this.state.pause});
    }

    endSession() {
      console.log("End Session");
    }
    componentDidMount() {
      this.timer = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount(){
      clearInterval(this.timer);
    }

    tick() {
      if (!this.state.pause){
        this.setState({
          elapsed: Date.now() - this.state.startTime + this.state.pauseTime
        })
      }
    }
        
    render() {
        var elapsed = Math.round(this.state.elapsed / 100); 
        var display = (elapsed/10).toFixed(1);
        return (
          <div className="live">
            <div className="timer">
              {Math.floor(display/60)}:{("0" + Math.round(display%60)).substr(-2)}
            </div>
            <Button bsStyle="warning" className="pause" onClick={() => this.pauseSession()}>{this.state.pauseBtnTxt}</Button>
            <Button bsStyle="danger" className="stop" onClick={() => this.endSession()}>Stop</Button>
          </div>
        )
    }
}

export default Live;