import React, { Component } from "react";
import "./RGBClicker.css";
class RGBClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 0,
      rClick: 0,
      gClick: 0,
      bClick: 0
    };
    this.clickDetect = this.clickDetect.bind(this);
    this.rClickDetect = this.rClickDetect.bind(this);
    this.gClickDetect = this.gClickDetect.bind(this);
    this.bClickDetect = this.bClickDetect.bind(this);
  }

  clickDetect = e => {
    console.log("Click Detected");
    this.setState({ click: this.state.click + 1 });
  };

  rClickDetect = e => {
    console.log("rClick Detected");
    this.setState({ rClick: this.state.rClick + 1 });
  };

  gClickDetect = e => {
    console.log("gClick Detected");
    this.setState({ gClick: this.state.gClick + 1 });
  };

  bClickDetect = e => {
    console.log("bClick Detected");
    this.setState({ bClick: this.state.bClick + 1 });
  };
  render() {
    let tot = this.state.click;
    let r = this.state.rClick;
    let g = this.state.gClick;
    let b = this.state.bClick;
    return (
      <div>
        <h1>rgbClicker!</h1>
        <h2>
          Tot:{tot} R:{r} G:{g} B:{b}
        </h2>
        <div onClick={this.clickDetect} className="click-boxes">
          <div onClick={this.rClickDetect} className="red-bg">
            Red
          </div>
          <div onClick={this.gClickDetect} className="green-bg">
            Blue
          </div>
          <div onClick={this.bClickDetect} className="blue-bg">
            Green
          </div>
        </div>
      </div>
    );
  }
}

export default RGBClicker;
