import React, { Component } from 'react'

class D3Chart extends Component {

  constructor() {
    super()
    this.__html = require('./D3.html');
    this.template = { __html: this.__html };
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.template} />
    )
  }

}

export default D3Chart