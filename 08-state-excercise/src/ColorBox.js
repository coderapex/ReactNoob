import React, { Component } from "react";
import "./ColorBoxContainer.css";

class ColorBox extends Component {
  static defaultProps = {
    palette: [
      "#ff9ff3",
      "#f368e0",
      "#feca57",
      "#ff9f43",
      "#ff6b6b",
      "#ff6b6b",
      "#ee5253",
      "#48dbfb",
      "#0abde3",
      "#1dd1a1",
      "#10ac84",
      "#54a0ff",
      "#2e86de",
      "#5f27cd",
      "#341f97",
      "#c8d6e5",
      "#8395a7",
      "#576574",
      "#222f3e"
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      newColor: "gray"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    console.log("handleClick Triggered");
    this.setNewColor();
  };

  setNewColor() {
    let oldC = this.state.newColor;
    let noOfColors = this.props.palette.length;
    let n = Math.floor(Math.random() * noOfColors);
    console.log(n);
    let newC = this.props.palette[n];
    console.log(newC);

    if (oldC === newC) {
      this.setNewColor();
    } else {
      this.setState(currSt => {
        return {
          newColor: newC
        };
      });
    }
  }
  render() {
    return (
      <li
        onMouseEnter={this.handleClick}
        className="flex-item"
        style={{ backgroundColor: this.state.newColor }}
      />
    );
  }
}

export default ColorBox;
