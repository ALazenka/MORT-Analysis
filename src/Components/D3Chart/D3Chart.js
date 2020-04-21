import React, { Component } from "react";

// import useVideo from '../../Hooks/useVideo'
import "./D3Chart.css";

class D3Chart extends Component {
  constructor() {
    super();
    this.state = {
      hasSentRequest: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.captureSnapshotCounter % 3 === 0 &&
      !this.state.hasSentRequest
    ) {
      console.log(nextProps);
      this.setState({
        hasSentRequest: true,
      });
      this.updateTable();
    } else {
      this.setState({
        hasSentRequest: false,
      });
    }
  }

  componentWillMount() {
    window.nv.addGraph(() => {
      var chart = window.nv.models
        .stackedAreaChart()
        .x(function (d) {
          return d[0];
        })
        .y(function (d) {
          return d[1];
        })
        .clipEdge(true)
        .useInteractiveGuideline(true)
        .showXAxis(false)
        .showControls(true)
        .showVoronoi(true)
        .color([
          "#e60000",
          "#ff6600",
          "#000066",
          "e6e600",
          "2eb82e",
          "808080",
          "00ace6",
          "9900cc",
        ]);
      chart.xAxis.showMaxMin(false).tickFormat(function (d) {
        return window.d3.time.format("%x")(new Date());
      });

      chart.yAxis.tickFormat(window.d3.format(",.2f"));

      chart.style("expand");

      let chartData = window.d3.select("#chart svg").datum(window.localData);
      chartData.transition().duration(500).call(chart);

      window.nv.utils.windowResize(chart.update);

      return chart;
    });
  }

  componentDidMount() {
    const video = document.getElementById("video");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(() => {
        console.log("Something went wrong!");
      });
    }
  }
  updateTable() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let video = document.getElementById("video");
    context.drawImage(video, 0, 0, 640, 480);
    let img = window.Base64Binary.decodeArrayBuffer(
      canvas.toDataURL().substring(22)
    );
    let ajax = new XMLHttpRequest();
    ajax.open(
      "POST",
      "https://api.projectoxford.ai/emotion/v1.0/recognize",
      "image/jpg"
    );
    ajax.setRequestHeader("Content-Type", "application/octet-stream");
    ajax.setRequestHeader(
      "Accept",
      "text/html,application/xhtml+xml,application/xml"
    );
    ajax.setRequestHeader(
      "Ocp-Apim-Subscription-Key",
      "7aa767ca5a054baea8e792b05348995c"
    );
    ajax.send(img);

    ajax.onload = (e) => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(ajax.response, "text/xml");
      var scoreMaps = {};
      var result = {};
      // Get face rectangle dimensions
      let allAudience = xmlDoc.getElementsByTagName("FaceRecognitionResult");
      for (var index = 0; index < allAudience.length; index++) {
        let scores = allAudience[index].children[1];
        for (
          var emotion_idx = 0;
          emotion_idx < scores.children.length;
          emotion_idx++
        ) {
          let propName = scores.children[emotion_idx].nodeName;
          let propValue = parseFloat(scores.children[emotion_idx].textContent);
          scoreMaps[propName] = scoreMaps[propName] || 0;
          scoreMaps[propName] = scoreMaps[propName] + propValue;
        }
      }

      result["sumScoreMaps"] = scoreMaps;
      result["audienceCnt"] = allAudience.length;

      for (var i = 0; i < 8; i++) {
        window.localData[i]["values"].shift();
        for (var j = 0; j < 99; j++) {
          window.localData[i]["values"][j][0] = j;
        }
      }

      window.localData[0]["values"].push([99, scoreMaps["anger"] || 0]);
      window.localData[1]["values"].push([99, scoreMaps["contempt"] || 0]);
      window.localData[2]["values"].push([99, scoreMaps["disgust"] || 0]);
      window.localData[3]["values"].push([99, scoreMaps["fear"] || 0]);
      window.localData[4]["values"].push([99, scoreMaps["happiness"] || 0]);
      window.localData[5]["values"].push([99, scoreMaps["neutral"] || 0]);
      window.localData[6]["values"].push([99, scoreMaps["sadness"] || 0]);
      window.localData[7]["values"].push([99, scoreMaps["surprise"] || 0]);

      var currentTimeStamp = new Date().getTime();
      window.globalData[0]["values"].push([
        currentTimeStamp,
        scoreMaps["anger"] || 0,
      ]);
      window.globalData[1]["values"].push([
        currentTimeStamp,
        scoreMaps["contempt"] || 0,
      ]);
      window.globalData[2]["values"].push([
        currentTimeStamp,
        scoreMaps["disgust"] || 0,
      ]);
      window.globalData[3]["values"].push([
        currentTimeStamp,
        scoreMaps["fear"] || 0,
      ]);
      window.globalData[4]["values"].push([
        currentTimeStamp,
        scoreMaps["happiness"] || 0,
      ]);
      window.globalData[5]["values"].push([
        currentTimeStamp,
        scoreMaps["neutral"] || 0,
      ]);
      window.globalData[6]["values"].push([
        currentTimeStamp,
        scoreMaps["sadness"] || 0,
      ]);
      window.globalData[7]["values"].push([
        currentTimeStamp,
        scoreMaps["surprise"] || 0,
      ]);

      this.props.setAverages(result);

      window.nv.addGraph(() => {
        var chart = window.nv.models
          .stackedAreaChart()
          .x(function (d) {
            return d[0];
          })
          .y(function (d) {
            return d[1];
          })
          .clipEdge(true)
          .useInteractiveGuideline(true)
          .showXAxis(false)
          .showControls(true)
          .showVoronoi(true)
          .color([
            "#e60000",
            "#ff6600",
            "#000066",
            "e6e600",
            "2eb82e",
            "808080",
            "00ace6",
            "9900cc",
          ]);

        chart.xAxis.showMaxMin(false).tickFormat(function (d) {
          return window.d3.time.format("%x")(new Date());
        });

        chart.yAxis.tickFormat(window.d3.format(",.2f"));

        chart.style("expand");

        let chartData = window.d3.select("#chart svg").datum(window.localData);
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
        <video
          id="video"
          className="live-video-hidden"
          width="640"
          height="480"
          autoPlay
        />
        <canvas
          id="canvas"
          className="canvas-hidden"
          width="640"
          height="480"
        />
      </div>
    );
  }
}

export default D3Chart;
