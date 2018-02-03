import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import D3Chart from '../component/D3Chart/D3Chart'
import './Live.css'

class Live extends Component {
  render() {
    return(
      <div className="Live">
        <D3Chart />
      </div>
    )
  }
}
export default Live;