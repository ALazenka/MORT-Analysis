import React, { Component } from 'react'
import './D3Final.css'

class D3Final extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount() {
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
          .tickFormat(function(d) { return window.d3.time.format('%H:%M:%S')(new Date(d)) });
    
      chart.yAxis
          .tickFormat(window.d3.format(',.2f'));

      chart.tooltip.headerFormatter(function (d) {return window.d3.time.format('%H:%M:%S')(new Date(d))})
    
      chart.style('expand');
    
      let chartData = window.d3.select('#chart svg').datum(window.globalData);
      chartData.transition().duration(500).call(chart);
    
      window.nv.utils.windowResize(chart.update);
    
      return chart;
    });

 }

  render() {
    return (
      <div>
        <div id="chart" className="chart">
          <svg></svg>
        </div>
      </div>
    )
  }

}

export default D3Final