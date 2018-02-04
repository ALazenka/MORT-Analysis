import React, { Component } from 'react'
import './D3Chart.css'

class D3Chart extends Component {

  constructor() {
    super()
    this.state = {
      localData: [ 
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
      ]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.captureSnapshotCounter % 3 === 0) {
      this.updateTable()
    }
  }

  componentWillMount() {
    window.nv.addGraph(() => {
      var chart = window.nv.models.stackedAreaChart()
        .x(function(d) { return d[0] })
        .y(function(d) { return d[1] })
        .clipEdge(true)
        .useInteractiveGuideline(true)
        .showXAxis(false)
        .showControls(true)
        .showVoronoi(true)
        .color(["#e60000","#ff6600","#000066","e6e600","2eb82e","808080","00ace6","9900cc"])
        ;
    
      chart.xAxis
          .showMaxMin(false)
          .tickFormat(function(d) { return window.d3.time.format('%x')(new Date()) });
    
      chart.yAxis
          .tickFormat(window.d3.format(',.2f'));
    
      chart.style('expand');
    
      let chartData = window.d3.select('#chart svg').datum(this.state.localData);
      chartData.transition().duration(500).call(chart);
    
      window.nv.utils.windowResize(chart.update);
    
      return chart;
    });
  }

  componentDidMount() {
    const video = document.getElementById('video')
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
    if (navigator.getUserMedia) {       
      navigator.getUserMedia({video: true}, (stream) => {
        video.src = window.URL.createObjectURL(stream)
      }, (error) => {
        //do something
      })
    }
 }
  updateTable() {
    console.log('update chart')
    const { localData } = this.state
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let video = document.getElementById('video');
    context.drawImage(video, 0, 0, 640, 480);
    let img = window.Base64Binary.decodeArrayBuffer(canvas.toDataURL().substring(22));
    let ajax = new XMLHttpRequest();
    ajax.open("POST", "https://api.projectoxford.ai/emotion/v1.0/recognize","image/jpg");
    ajax.setRequestHeader("Content-Type","application/octet-stream");
    ajax.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml");
    ajax.setRequestHeader("Ocp-Apim-Subscription-Key","7aa767ca5a054baea8e792b05348995c");
    ajax.send(img);
  
    ajax.onload = (e) => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(ajax.response, "text/xml");
      var avgScoresList = [];
      var sumScoresList = {};
      var scoreMaps = {};
      var result = {};
      // Get face rectangle dimensions
      let allAudience = xmlDoc.getElementsByTagName("FaceRecognitionResult");
      for (var index = 0 ; index < allAudience.length ; index++){
        let scores = allAudience[index].children[1];
        for(var emotion_idx = 0 ; emotion_idx < scores.children.length ; emotion_idx++) {
          let propName = scores.children[emotion_idx].nodeName;
          let propValue = parseFloat(scores.children[emotion_idx].textContent);
          scoreMaps[propName] = scoreMaps[propName] || 0;
          scoreMaps[propName] = scoreMaps[propName]+propValue;
        }
      }

      result['sumScoreMaps']=scoreMaps;
      result['audienceCnt']=allAudience.length;

      for(var i = 0; i < 8; i++){
        localData[i]["values"].shift();
        for(var j = 0; j < 99; j++){
          localData[i]["values"][j][0] = j;
        }
      }

      localData[0]["values"].push([99 ,scoreMaps["anger"] || 0]);
      localData[1]["values"].push([99 ,scoreMaps["contempt"] || 0]);
      localData[2]["values"].push([99 ,scoreMaps["disgust"] || 0]);
      localData[3]["values"].push([99 ,scoreMaps["fear"] || 0]);
      localData[4]["values"].push([99 ,scoreMaps["happiness"] || 0]);
      localData[5]["values"].push([99 ,scoreMaps["neutral"] || 0]);
      localData[6]["values"].push([99 ,scoreMaps["sadness"] || 0]);
      localData[7]["values"].push([99 ,scoreMaps["surprise"] || 0]);

      window.nv.addGraph(() => {
        var chart = window.nv.models.stackedAreaChart()
          .x(function(d) { return d[0] })
          .y(function(d) { return d[1] })
          .clipEdge(true)
          .useInteractiveGuideline(true)
          .showXAxis(false)
          .showControls(true)
          .showVoronoi(true)
          .color(["#e60000","#ff6600","#000066","e6e600","2eb82e","808080","00ace6","9900cc"])

        chart.xAxis
          .showMaxMin(false)
          .tickFormat(function(d) { return window.d3.time.format('%x')(new Date()) });

        chart.yAxis
          .tickFormat(window.d3.format(',.2f'));

        chart.style('expand');

        let chartData = window.d3.select('#chart svg').datum(localData);
        chartData.transition().duration(500).call(chart);

        window.nv.utils.windowResize(chart.update);

        return chart;
      });
    };
  }

  render() {
    return (
      <div>
        <div id="chart" className="chart">
          <svg></svg>
        </div>
        <video id="video" className="live-video-hidden" width="640" height="480" autoPlay />
        <canvas id="canvas" className="canvas-hidden" width="640" height="480" />
      </div>
    )
  }

}

export default D3Chart