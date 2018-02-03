import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import D3Chart from '../component/D3Chart/D3Chart'
import './Live.css'

class Live extends Component {
<<<<<<< HEAD
    constructor() {
        super();
        this.state= {
            startTime: Date.now(),
            elapsed: 0
        }
        console.log(this.state.startTime)
    }

    componentWillMount() {
        const startTime = new Date()
        this.setState({
            startTime
        })
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick() {
        this.setState({elapsed: Date.now() - this.state.startTime});
    }
        
    render() {
        var elapsed = Math.round(this.state.elapsed / 100); 
        var display = (elapsed/10).toFixed(1);
        return(
            <div className="Live">
                <div className="timer">
                    <div>{display}</div>
                </div>
            </div>
        )
    }
=======
  render() {
    return(
      <div className="Live">
        <D3Chart />
      </div>
    )
  }
>>>>>>> 63ce3ef80b46edef43ade0e8ecc6453fd4303aa4
}
export default Live;