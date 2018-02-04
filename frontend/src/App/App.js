import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Live from '../Pages/Live/Live'
import Home from '../Pages/Home/Home'
import Result from '../Pages/Result/Result'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      currentPage: 'live',
      historyData: [{ 
          "key" : "Anger" ,
          "values" : [ ]
        }, 
    
        { 
          "key" : "Contempt",
          "values" : [ ]
        }, 
    
        { 
          "key" : "Disgust",
          "values" : [ ]
        },
    
        { 
          "key" : "Fear",
          "values" : [ ]
        } , 
    
        { 
          "key" : "Happiness",
          "values" : [ ]
        } , 
    
        {
          "key" : "Neutral",
          "values" : [ ]
        } , 
    
        { 
          "key" : "Sadness",
          "values" : [ ]
        } ,
        { 
          "key" : "Surprise",
          "values" : [ ]
        }
      ]
    }
  }

  changePage(currentPage) {
    this.setState({
      currentPage
    })
  }

  render() {
    if (this.state.currentPage === 'live') {
      return <Live />
    } else if (this.state.currentPage === 'result') {
      return <Result />  
    }
    return <Home changePage={pageName => this.changePage(pageName)} />
  }
}

export default App;
