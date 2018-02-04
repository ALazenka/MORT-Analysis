import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import "./Result.css"
import D3Final from '../../Components/D3Final/D3Final'

var fullLength = 0;

class Result extends Component {
  constructor(){
    super();
    this.averages = {
      Anger: 0,
      Contempt: 0,
      Disgust: 0,
      Fear: 0,
      Happiness: 0,
      Neutral: 0,
      Sadness: 0,
      Surprise: 0,
    };
  }

  componentWillMount() {
    let someObj = {}
    let valueHolder = []
    window.globalData.forEach(innerObj => {
      console.log(innerObj)
      let key = innerObj.key
      someObj[key] = { times: [], values: []}
      innerObj.values.forEach(innerArray => {
        someObj[key].times.push(innerArray[0])
        someObj[key].values.push(innerArray[1])
        valueHolder.push(innerArray[1])
      })
    })
    this.averages = someObj
    fullLength = this.arrayAverage(valueHolder)
    console.log(this.averages)
  }

  arrayAverage(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++ ) {
        sum += array[i]
    }

    let returnVal = (parseInt(sum * 1000) * 1.0 / 10 / array.length).toFixed(1)
    return returnVal;
  }
  getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  maxIndex(emotion){
    var max = this.getMaxOfArray(this.averages[emotion].values);
    console.log("MAX INDEX FUNC")
    console.log(this.averages[emotion].times)
    console.log(max)
    return this.averages[emotion].values.indexOf(max);
  }

  findMax(emotion){
    console.log("FIND MAX FUNC")
    return this.averages[emotion].values[this.maxIndex(emotion)];
  }

  findMaxTime(emotion){
    return this.averages[emotion].times[this.maxIndex(emotion)];
  }

  restartSession() {
    window.sessionTime = 0;

    window.globalData = [{ 
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
    ];
    window.localData = [ 
      { 
        "key" : "Anger" , 
        "values" : [ [0, 0] , [1, 0] , [2, 0] , [3, 0] , [4, 0] , [5, 0] , [6, 0] , [7, 0] , [8, 0] , [9, 0] , [10, 0] , [11, 0] , [12, 0] , [13, 0] , [14, 0] , [15, 0] , [16, 0] , [17, 0] , [18, 0] , [19, 0] , [20, 0] , [21, 0] , [22, 0] , [23, 0] , [24, 0] , [25, 0] , [26, 0] , [27, 0] , [28, 0] , [29, 0] , [30, 0] , [31, 0] , [32, 0] , [33, 0] , [34, 0] , [35, 0] , [36, 0] , [37, 0] , [38, 0] , [39, 0] , [40, 0] , [41, 0] , [42, 0] , [43, 0] , [44, 0] , [45, 0] , [46, 0] , [47, 0] , [48, 0] , [49, 0] , [50, 0] , [51, 0] , [52, 0] , [53, 0] , [54, 0] , [55, 0] , [56, 0] , [57, 0] , [58, 0] , [59, 0] , [60, 0] , [61, 0] , [62, 0] , [63, 0] , [64, 0] , [65, 0] , [66, 0] , [67, 0] , [68, 0] , [69, 0] , [70, 0] , [71, 0] , [72, 0] , [73, 0] , [74, 0] , [75, 0] , [76, 0] , [77, 0] , [78, 0] , [79, 0] , [80, 0] , [81, 0] , [82, 0] , [83, 0] , [84, 0] , [85, 0] , [86, 0] , [87, 0] , [88, 0] , [89, 0] , [90, 0] , [91, 0] , [92, 0] , [93, 0] , [94, 0] , [95, 0] , [96, 0] , [97, 0] , [98, 0] , [99, 0] ]
      }, 
    
      { 
        "key" : "Contempt" , 
        "values" : [ [0, 0] , [1, 0] , [2, 0] , [3, 0] , [4, 0] , [5, 0] , [6, 0] , [7, 0] , [8, 0] , [9, 0] , [10, 0] , [11, 0] , [12, 0] , [13, 0] , [14, 0] , [15, 0] , [16, 0] , [17, 0] , [18, 0] , [19, 0] , [20, 0] , [21, 0] , [22, 0] , [23, 0] , [24, 0] , [25, 0] , [26, 0] , [27, 0] , [28, 0] , [29, 0] , [30, 0] , [31, 0] , [32, 0] , [33, 0] , [34, 0] , [35, 0] , [36, 0] , [37, 0] , [38, 0] , [39, 0] , [40, 0] , [41, 0] , [42, 0] , [43, 0] , [44, 0] , [45, 0] , [46, 0] , [47, 0] , [48, 0] , [49, 0] , [50, 0] , [51, 0] , [52, 0] , [53, 0] , [54, 0] , [55, 0] , [56, 0] , [57, 0] , [58, 0] , [59, 0] , [60, 0] , [61, 0] , [62, 0] , [63, 0] , [64, 0] , [65, 0] , [66, 0] , [67, 0] , [68, 0] , [69, 0] , [70, 0] , [71, 0] , [72, 0] , [73, 0] , [74, 0] , [75, 0] , [76, 0] , [77, 0] , [78, 0] , [79, 0] , [80, 0] , [81, 0] , [82, 0] , [83, 0] , [84, 0] , [85, 0] , [86, 0] , [87, 0] , [88, 0] , [89, 0] , [90, 0] , [91, 0] , [92, 0] , [93, 0] , [94, 0] , [95, 0] , [96, 0] , [97, 0] , [98, 0] , [99, 0]  ]
      }, 
    
      { 
        "key" : "Disgust" , 
        "values" : [ [0, 0] , [1, 0] , [2, 0] , [3, 0] , [4, 0] , [5, 0] , [6, 0] , [7, 0] , [8, 0] , [9, 0] , [10, 0] , [11, 0] , [12, 0] , [13, 0] , [14, 0] , [15, 0] , [16, 0] , [17, 0] , [18, 0] , [19, 0] , [20, 0] , [21, 0] , [22, 0] , [23, 0] , [24, 0] , [25, 0] , [26, 0] , [27, 0] , [28, 0] , [29, 0] , [30, 0] , [31, 0] , [32, 0] , [33, 0] , [34, 0] , [35, 0] , [36, 0] , [37, 0] , [38, 0] , [39, 0] , [40, 0] , [41, 0] , [42, 0] , [43, 0] , [44, 0] , [45, 0] , [46, 0] , [47, 0] , [48, 0] , [49, 0] , [50, 0] , [51, 0] , [52, 0] , [53, 0] , [54, 0] , [55, 0] , [56, 0] , [57, 0] , [58, 0] , [59, 0] , [60, 0] , [61, 0] , [62, 0] , [63, 0] , [64, 0] , [65, 0] , [66, 0] , [67, 0] , [68, 0] , [69, 0] , [70, 0] , [71, 0] , [72, 0] , [73, 0] , [74, 0] , [75, 0] , [76, 0] , [77, 0] , [78, 0] , [79, 0] , [80, 0] , [81, 0] , [82, 0] , [83, 0] , [84, 0] , [85, 0] , [86, 0] , [87, 0] , [88, 0] , [89, 0] , [90, 0] , [91, 0] , [92, 0] , [93, 0] , [94, 0] , [95, 0] , [96, 0] , [97, 0] , [98, 0] , [99, 0] ]
      },
    
      { 
        "key" : "Fear" , 
        "values" : [ [0, 0] , [1, 0] , [2, 0] , [3, 0] , [4, 0] , [5, 0] , [6, 0] , [7, 0] , [8, 0] , [9, 0] , [10, 0] , [11, 0] , [12, 0] , [13, 0] , [14, 0] , [15, 0] , [16, 0] , [17, 0] , [18, 0] , [19, 0] , [20, 0] , [21, 0] , [22, 0] , [23, 0] , [24, 0] , [25, 0] , [26, 0] , [27, 0] , [28, 0] , [29, 0] , [30, 0] , [31, 0] , [32, 0] , [33, 0] , [34, 0] , [35, 0] , [36, 0] , [37, 0] , [38, 0] , [39, 0] , [40, 0] , [41, 0] , [42, 0] , [43, 0] , [44, 0] , [45, 0] , [46, 0] , [47, 0] , [48, 0] , [49, 0] , [50, 0] , [51, 0] , [52, 0] , [53, 0] , [54, 0] , [55, 0] , [56, 0] , [57, 0] , [58, 0] , [59, 0] , [60, 0] , [61, 0] , [62, 0] , [63, 0] , [64, 0] , [65, 0] , [66, 0] , [67, 0] , [68, 0] , [69, 0] , [70, 0] , [71, 0] , [72, 0] , [73, 0] , [74, 0] , [75, 0] , [76, 0] , [77, 0] , [78, 0] , [79, 0] , [80, 0] , [81, 0] , [82, 0] , [83, 0] , [84, 0] , [85, 0] , [86, 0] , [87, 0] , [88, 0] , [89, 0] , [90, 0] , [91, 0] , [92, 0] , [93, 0] , [94, 0] , [95, 0] , [96, 0] , [97, 0] , [98, 0] , [99, 0] ]
      } , 
    
      { 
        "key" : "Happiness" , 
        "values" : [ [0, 0] , [1, 0] , [2, 0] , [3, 0] , [4, 0] , [5, 0] , [6, 0] , [7, 0] , [8, 0] , [9, 0] , [10, 0] , [11, 0] , [12, 0] , [13, 0] , [14, 0] , [15, 0] , [16, 0] , [17, 0] , [18, 0] , [19, 0] , [20, 0] , [21, 0] , [22, 0] , [23, 0] , [24, 0] , [25, 0] , [26, 0] , [27, 0] , [28, 0] , [29, 0] , [30, 0] , [31, 0] , [32, 0] , [33, 0] , [34, 0] , [35, 0] , [36, 0] , [37, 0] , [38, 0] , [39, 0] , [40, 0] , [41, 0] , [42, 0] , [43, 0] , [44, 0] , [45, 0] , [46, 0] , [47, 0] , [48, 0] , [49, 0] , [50, 0] , [51, 0] , [52, 0] , [53, 0] , [54, 0] , [55, 0] , [56, 0] , [57, 0] , [58, 0] , [59, 0] , [60, 0] , [61, 0] , [62, 0] , [63, 0] , [64, 0] , [65, 0] , [66, 0] , [67, 0] , [68, 0] , [69, 0] , [70, 0] , [71, 0] , [72, 0] , [73, 0] , [74, 0] , [75, 0] , [76, 0] , [77, 0] , [78, 0] , [79, 0] , [80, 0] , [81, 0] , [82, 0] , [83, 0] , [84, 0] , [85, 0] , [86, 0] , [87, 0] , [88, 0] , [89, 0] , [90, 0] , [91, 0] , [92, 0] , [93, 0] , [94, 0] , [95, 0] , [96, 0] , [97, 0] , [98, 0] , [99, 0] ]
      } , 
    
      {
        "key" : "Neutral" , 
        "values" : [ [0, 0] , [1, 0] , [2, 0] , [3, 0] , [4, 0] , [5, 0] , [6, 0] , [7, 0] , [8, 0] , [9, 0] , [10, 0] , [11, 0] , [12, 0] , [13, 0] , [14, 0] , [15, 0] , [16, 0] , [17, 0] , [18, 0] , [19, 0] , [20, 0] , [21, 0] , [22, 0] , [23, 0] , [24, 0] , [25, 0] , [26, 0] , [27, 0] , [28, 0] , [29, 0] , [30, 0] , [31, 0] , [32, 0] , [33, 0] , [34, 0] , [35, 0] , [36, 0] , [37, 0] , [38, 0] , [39, 0] , [40, 0] , [41, 0] , [42, 0] , [43, 0] , [44, 0] , [45, 0] , [46, 0] , [47, 0] , [48, 0] , [49, 0] , [50, 0] , [51, 0] , [52, 0] , [53, 0] , [54, 0] , [55, 0] , [56, 0] , [57, 0] , [58, 0] , [59, 0] , [60, 0] , [61, 0] , [62, 0] , [63, 0] , [64, 0] , [65, 0] , [66, 0] , [67, 0] , [68, 0] , [69, 0] , [70, 0] , [71, 0] , [72, 0] , [73, 0] , [74, 0] , [75, 0] , [76, 0] , [77, 0] , [78, 0] , [79, 0] , [80, 0] , [81, 0] , [82, 0] , [83, 0] , [84, 0] , [85, 0] , [86, 0] , [87, 0] , [88, 0] , [89, 0] , [90, 0] , [91, 0] , [92, 0] , [93, 0] , [94, 0] , [95, 0] , [96, 0] , [97, 0] , [98, 0] , [99, 0]  ]
      } , 
    
      { 
        "key" : "Sadness" , 
        "values" : [ [0, 0] , [1, 0] , [2, 0] , [3, 0] , [4, 0] , [5, 0] , [6, 0] , [7, 0] , [8, 0] , [9, 0] , [10, 0] , [11, 0] , [12, 0] , [13, 0] , [14, 0] , [15, 0] , [16, 0] , [17, 0] , [18, 0] , [19, 0] , [20, 0] , [21, 0] , [22, 0] , [23, 0] , [24, 0] , [25, 0] , [26, 0] , [27, 0] , [28, 0] , [29, 0] , [30, 0] , [31, 0] , [32, 0] , [33, 0] , [34, 0] , [35, 0] , [36, 0] , [37, 0] , [38, 0] , [39, 0] , [40, 0] , [41, 0] , [42, 0] , [43, 0] , [44, 0] , [45, 0] , [46, 0] , [47, 0] , [48, 0] , [49, 0] , [50, 0] , [51, 0] , [52, 0] , [53, 0] , [54, 0] , [55, 0] , [56, 0] , [57, 0] , [58, 0] , [59, 0] , [60, 0] , [61, 0] , [62, 0] , [63, 0] , [64, 0] , [65, 0] , [66, 0] , [67, 0] , [68, 0] , [69, 0] , [70, 0] , [71, 0] , [72, 0] , [73, 0] , [74, 0] , [75, 0] , [76, 0] , [77, 0] , [78, 0] , [79, 0] , [80, 0] , [81, 0] , [82, 0] , [83, 0] , [84, 0] , [85, 0] , [86, 0] , [87, 0] , [88, 0] , [89, 0] , [90, 0] , [91, 0] , [92, 0] , [93, 0] , [94, 0] , [95, 0] , [96, 0] , [97, 0] , [98, 0] , [99, 0]  ]
      } ,
      { 
        "key" : "Surprise" , 
        "values" : [ [0, 0] , [1, 0] , [2, 0] , [3, 0] , [4, 0] , [5, 0] , [6, 0] , [7, 0] , [8, 0] , [9, 0] , [10, 0] , [11, 0] , [12, 0] , [13, 0] , [14, 0] , [15, 0] , [16, 0] , [17, 0] , [18, 0] , [19, 0] , [20, 0] , [21, 0] , [22, 0] , [23, 0] , [24, 0] , [25, 0] , [26, 0] , [27, 0] , [28, 0] , [29, 0] , [30, 0] , [31, 0] , [32, 0] , [33, 0] , [34, 0] , [35, 0] , [36, 0] , [37, 0] , [38, 0] , [39, 0] , [40, 0] , [41, 0] , [42, 0] , [43, 0] , [44, 0] , [45, 0] , [46, 0] , [47, 0] , [48, 0] , [49, 0] , [50, 0] , [51, 0] , [52, 0] , [53, 0] , [54, 0] , [55, 0] , [56, 0] , [57, 0] , [58, 0] , [59, 0] , [60, 0] , [61, 0] , [62, 0] , [63, 0] , [64, 0] , [65, 0] , [66, 0] , [67, 0] , [68, 0] , [69, 0] , [70, 0] , [71, 0] , [72, 0] , [73, 0] , [74, 0] , [75, 0] , [76, 0] , [77, 0] , [78, 0] , [79, 0] , [80, 0] , [81, 0] , [82, 0] , [83, 0] , [84, 0] , [85, 0] , [86, 0] , [87, 0] , [88, 0] , [89, 0] , [90, 0] , [91, 0] , [92, 0] , [93, 0] , [94, 0] , [95, 0] , [96, 0] , [97, 0] , [98, 0] , [99, 0]  ]
      }
    ];
    this.props.changePage('home')
  }

  render() {
    var elapsed = Math.round(window.sessionTime / 100)
    var display = (elapsed/10).toFixed(1)
    console.log((this.arrayAverage(this.averages['Anger'].values) / fullLength))
    return (
      <div className="result">
        <div className="top-row-results">
          <div className="time">Session Time: {Math.floor(display/60)}:{("0" + Math.round(display%60)).substr(-2)}</div>
          <div>
            <Button bsStyle="info" className="export-button">Export</Button>
            <Button bsStyle="danger" className="exit-button" onClick={() => this.restartSession()}>Exit</Button>
          </div>
        </div>
        <div className="scrub">
          <D3Final />
        </div>
        <div className="result-titles">
          <div className="current-values-title">Average Values</div>
          <div className="transcript-title">Voice Transcript</div>
          <div className="max-values-title">Max Values</div>
        </div>
        <div className="data">
          <div className="average-grid">
            <div
              className="analytics-box-1"
              style={{ backgroundColor: ("rgba(230, 0, 0, " + (this.arrayAverage(this.averages['Anger'].values) / 100) + ")")}}
              >
              <p className="analytic-name">Anger</p>
              <p className="analytic-percentage">{this.arrayAverage(this.averages['Anger'].values)}%</p>
            </div>
            <div
              className="analytics-box-2"
              style={{ backgroundColor: ("rgba(255, 102, 0, " + (this.arrayAverage(this.averages['Contempt'].values) / 100) + ")")}}
            >
              <p className="analytic-name">Contempt</p>
              <p className="analytic-percentage">{this.arrayAverage(this.averages['Contempt'].values)}%</p>
            </div>
            <div
              className="analytics-box-3"
              style={{ backgroundColor: ("rgba(0, 0, 102, " + (this.arrayAverage(this.averages['Disgust'].values) / 100) + ")")}}
              >
              <p className="analytic-name">Disgust</p>
              <p className="analytic-percentage">{this.arrayAverage(this.averages['Disgust'].values)}%</p>
            </div>
            <div
              className="analytics-box-4"
              style={{ backgroundColor: ("rgba(230, 230, 0, " + (this.arrayAverage(this.averages['Fear'].values) / 100) + ")")}}
            >
              <p className="analytic-name">Fear</p>
              <p className="analytic-percentage">{this.arrayAverage(this.averages['Fear'].values)}%</p>
            </div>
            <div
              className="analytics-box-5"
              style={{ backgroundColor: ("rgba(42, 190, 42, " + (this.arrayAverage(this.averages['Happiness'].values) / 100) + ")")}}>
              <p className="analytic-name">Happiness</p>
              <p className="analytic-percentage">{this.arrayAverage(this.averages['Happiness'].values)}%</p>
            </div>
            <div
              className="analytics-box-6"
              style={{ backgroundColor: ("rgba(128, 128, 128, " + (this.arrayAverage(this.averages['Neutral'].values) / 100) + ")")}}
            >
              <p className="analytic-name">Neutral</p>
              <p className="analytic-percentage">{this.arrayAverage(this.averages['Neutral'].values)}%</p>
            </div>
            <div
              className="analytics-box-7"
              style={{ backgroundColor: ("rgba(0, 172, 230, " + (this.arrayAverage(this.averages['Sadness'].values) / 100) + ")")}}
            >
              <p className="analytic-name">Sadness</p>
              <p className="analytic-percentage">{this.arrayAverage(this.averages['Sadness'].values)}%</p>
            </div>
            <div
              className="analytics-box-8"
              style={{ backgroundColor: ("rgba(153, 0, 204, " + (this.arrayAverage(this.averages['Surprise'].values) / 100) + ")")}}
            >
              <p className="analytic-name">Surprise</p>
              <p className="analytic-percentage">{this.arrayAverage(this.averages['Surprise'].values)}%</p>
            </div>
          </div>
          <div className="transcription">
            {window.textContent}
          </div>
          <div className="max-values">
            <div className="max-grid">
              <div
                className="max-box-1"
                style={{ backgroundColor: ("rgba(230, 0, 0, " + (this.arrayAverage(this.averages['Anger'].values) / fullLength) + ")")}}
              >
                <p className="analytic-name">Anger</p>
                <p className="analytic-percentage">{(parseInt(this.findMax('Anger') * 1000) * 1.0 / 10).toFixed(1)}% at {window.d3.time.format('%H:%M:%S')(new Date(this.findMaxTime("Anger")))}</p>
              </div>
              <div
                className="max-box-2"
                style={{ backgroundColor: ("rgba(255, 102, 0, " + (this.arrayAverage(this.averages['Contempt'].values) / fullLength) + ")")}}
              >
                <p className="analytic-name">Contempt</p>
                <p className="analytic-percentage">{(parseInt(this.findMax('Contempt') * 1000) * 1.0 / 10).toFixed(1)}% at {window.d3.time.format('%H:%M:%S')(new Date(this.findMaxTime("Contempt")))}</p>
              </div>
              <div
                className="max-box-3"
                style={{ backgroundColor: ("rgba(0, 0, 102, " + (this.arrayAverage(this.averages['Disgust'].values) / fullLength) + ")")}}
              >
                <p className="analytic-name">Disgust</p>
                <p className="analytic-percentage">{(parseInt(this.findMax('Disgust') * 1000) * 1.0 / 10).toFixed(1)}% at {window.d3.time.format('%H:%M:%S')(new Date(this.findMaxTime("Disgust")))}</p>
              </div>
              <div
                className="max-box-4"
                style={{ backgroundColor: ("rgba(230, 230, 0, " + (this.arrayAverage(this.averages['Fear'].values) / fullLength) + ")")}}
              >
                <p className="analytic-name">Fear</p>
                <p className="analytic-percentage">{(parseInt(this.findMax('Fear') * 1000) * 1.0 / 10).toFixed(1)}% at {window.d3.time.format('%H:%M:%S')(new Date(this.findMaxTime("Fear")))}</p>
              </div>
              <div
                className="max-box-5"
                style={{ backgroundColor: ("rgba(42, 190, 42, " + (this.arrayAverage(this.averages['Happiness'].values) / fullLength) + ")")}}
              >
                <p className="analytic-name">Happiness</p>
                <p className="analytic-percentage">{(parseInt(this.findMax('Happiness') * 1000) * 1.0 / 10).toFixed(1)}% at {window.d3.time.format('%H:%M:%S')(new Date(this.findMaxTime("Happiness")))}</p>
              </div>
              <div
                className="max-box-6"
                style={{ backgroundColor: ("rgba(128, 128, 128, " + (this.arrayAverage(this.averages['Neutral'].values) / fullLength) + ")")}}
              >
                <p className="analytic-name">Neutral</p>
                <p className="analytic-percentage">{(parseInt(this.findMax('Neutral') * 1000) * 1.0 / 10).toFixed(1)}% at {window.d3.time.format('%H:%M:%S')(new Date(this.findMaxTime("Neutral")))}</p>
              </div>
              <div
                className="max-box-7"
                style={{ backgroundColor: ("rgba(0, 172, 230, " + (this.arrayAverage(this.averages['Sadness'].values) / fullLength) + ")")}}
              >
                <p className="analytic-name">Sadness</p>
                <p className="analytic-percentage">{(parseInt(this.findMax('Sadness') * 1000) * 1.0 / 10).toFixed(1)}% at {window.d3.time.format('%H:%M:%S')(new Date(this.findMaxTime("Sadness")))}</p>
              </div>
              <div
                className="max-box-8"
                style={{ backgroundColor: ("rgba(153, 0, 204, " + (this.arrayAverage(this.averages['Surprise'].values) / fullLength) + ")")}}
              >
                <p className="analytic-name">Surprise</p>
                <p className="analytic-percentage">{(parseInt(this.findMax('Surprise') * 1000) * 1.0 / 10).toFixed(1)}% at {window.d3.time.format('%H:%M:%S')(new Date(this.findMaxTime("Surprise")))}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Result