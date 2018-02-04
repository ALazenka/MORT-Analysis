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
    var elapsed = Math.round(window.sessionTime / 100)
    var display = (elapsed/10).toFixed(1)
    return (
      <div className="result">
        <div className="top-row-results">
          <div className="time">Session Time: {Math.floor(display/60)}:{("0" + Math.round(display%60)).substr(-2)}</div>
          <div>
            <Button bsStyle="info" className="export-button">Export</Button>
            <Button bsStyle="danger" className="exit-button">Exit</Button>
          </div>
        </div>
        <div className="scrub">
        </div>
        <div className="result-titles">
          <div className="current-values-title">Current Values</div>
          <div className="transcript-title">Voice Transcript</div>
          <div className="max-values-title">Max Values</div>
        </div>
        <div className="data">
          <div className="average-grid">
            <div className="analytics-box-1">
              <p className="analytic-name">Anger</p>
              <p className="analytic-percentage">{(parseInt(this.averages['anger'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
            </div>
            <div className="analytics-box-2">
              <p className="analytic-name">Contempt</p>
              <p className="analytic-percentage">{(parseInt(this.averages['contempt'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
            </div>
            <div className="analytics-box-3">
              <p className="analytic-name">Disgust</p>
              <p className="analytic-percentage">{(parseInt(this.averages['disgust'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
            </div>
            <div className="analytics-box-4">
              <p className="analytic-name">Fear</p>
              <p className="analytic-percentage">{(parseInt(this.averages['fear'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
            </div>
            <div className="analytics-box-5">
              <p className="analytic-name">Happiness</p>
              <p className="analytic-percentage">{(parseInt(this.averages['happiness'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
            </div>
            <div className="analytics-box-6">
              <p className="analytic-name">Neutral</p>
              <p className="analytic-percentage">{(parseInt(this.averages['neutral'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
            </div>
            <div className="analytics-box-7">
              <p className="analytic-name">Sadness</p>
              <p className="analytic-percentage">{(parseInt(this.averages['sadness'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
            </div>
            <div className="analytics-box-8">
              <p className="analytic-name">Surprise</p>
              <p className="analytic-percentage">{(parseInt(this.averages['surprise'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
            </div>
          </div>
          <div className="transcription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam ultrices nisi, id imperdiet nisi volutpat eu. Aliquam est nunc, gravida in placerat ut, sodales ac nisi. Pellentesque blandit aliquam urna vel porttitor. Phasellus id turpis non tellus consequat tempus eget vitae turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra odio sed diam egestas, nec imperdiet turpis venenatis. Donec consectetur erat id ipsum varius convallis. Nulla facilisi. Donec eu dolor orci. Cras placerat mauris sit amet massa ullamcorper lobortis. Fusce molestie, dolor in gravida sagittis, felis arcu consequat risus, a cursus dolor nisl ullamcorper turpis. In ut magna diam.

            Cras vel lorem posuere, pulvinar dui eu, finibus felis. Proin nec velit vitae enim lacinia aliquam sed in felis. Aenean neque arcu, pharetra id faucibus non, gravida eu tortor. In mi leo, dignissim nec congue vitae, auctor sed velit. Proin a imperdiet ipsum, eu interdum sapien. Mauris venenatis, lacus vitae viverra bibendum, erat mi molestie nibh, non egestas mi erat et nisi. Mauris lacus nunc, commodo sit amet sapien quis, porta dictum mauris. Praesent mi purus, luctus ut urna eget, tempor pellentesque erat.

            Sed rhoncus justo a magna luctus mollis. Proin ac risus vitae felis maximus finibus nec ac purus. Aliquam commodo lorem elit, vel dapibus diam laoreet nec. Fusce sed sapien sed turpis cursus faucibus et et augue. Phasellus pulvinar ex id tempor auctor. Quisque in vestibulum nunc, vitae venenatis tortor. Nulla ullamcorper scelerisque dolor in ultrices. Sed eu pretium leo, et varius dolor. Curabitur lobortis quis neque ut tempor. Aenean ante ante, sollicitudin eu leo sed, tincidunt faucibus nibh. Phasellus facilisis vitae lacus et vestibulum. Vivamus at posuere lectus. Phasellus vel placerat metus, quis dictum nibh. Praesent ligula ante, facilisis a luctus nec, vehicula sed eros. Sed tempor sodales ante, sit amet sodales metus fringilla vitae. Suspendisse volutpat ante eget odio sodales tincidunt.

            Maecenas placerat risus urna, sit amet egestas lectus luctus vel. Nulla id interdum risus, in lobortis arcu. Etiam maximus ex diam, vitae tincidunt ligula blandit nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean varius venenatis odio eu blandit. Quisque interdum est vestibulum purus finibus, a vulputate nunc consequat. Aenean ornare justo at odio laoreet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec nisl dolor, pulvinar ut ipsum nec, aliquam auctor velit. Nam blandit eget erat suscipit suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

            Suspendisse ultricies, justo sit amet ultricies egestas, sapien nibh mattis neque, non fermentum leo elit vel tellus. Fusce varius velit ut lorem convallis maximus. Suspendisse varius, enim eu rhoncus efficitur, risus diam sollicitudin lectus, eget molestie dolor ligula id nunc. Nulla facilisi. Morbi eu tempor dui. Aliquam erat volutpat. Nullam consectetur consectetur eros posuere eleifend. Curabitur quam felis, tempor eget placerat vel, auctor vitae est. Donec euismod tellus quis nulla condimentum aliquet. Nam sed malesuada purus, sed gravida diam. Praesent ut quam aliquet, ultricies enim sed, iaculis mauris. Donec a rutrum augue. Maecenas porta bibendum magna, eget vulputate mi gravida sed. Donec vel semper turpis. Morbi sit amet quam semper, scelerisque augue sed, placerat turpis.
          </div>
          <div className="max-values">
            <div className="max-grid">
              <div className="max-box-1">
                <p className="analytic-name">Anger</p>
                <p className="analytic-percentage">{(parseInt(this.averages['anger'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
              </div>
              <div className="max-box-2">
                <p className="analytic-name">Contempt</p>
                <p className="analytic-percentage">{(parseInt(this.averages['contempt'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
              </div>
              <div className="max-box-3">
                <p className="analytic-name">Disgust</p>
                <p className="analytic-percentage">{(parseInt(this.averages['disgust'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
              </div>
              <div className="max-box-4">
                <p className="analytic-name">Fear</p>
                <p className="analytic-percentage">{(parseInt(this.averages['fear'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
              </div>
              <div className="max-box-5">
                <p className="analytic-name">Happiness</p>
                <p className="analytic-percentage">{(parseInt(this.averages['happiness'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
              </div>
              <div className="max-box-6">
                <p className="analytic-name">Neutral</p>
                <p className="analytic-percentage">{(parseInt(this.averages['neutral'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
              </div>
              <div className="max-box-7">
                <p className="analytic-name">Sadness</p>
                <p className="analytic-percentage">{(parseInt(this.averages['sadness'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
              </div>
              <div className="max-box-8">
                <p className="analytic-name">Surprise</p>
                <p className="analytic-percentage">{(parseInt(this.averages['surprise'] * 1000) * 1.0 / 10).toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Result