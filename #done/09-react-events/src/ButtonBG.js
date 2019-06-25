import React, { Component } from "react";
import "./ButtonBG.css";

class ButtonBG extends Component {
  static defaultProps = {
    colors: [
      "gray",
      "burlywood",
      "cornflowerblue",
      "dodgerblue",
      "floralwhite",
      "greenyellow",
      "hotpink",
      "indianred",
      "khaki",
      "lavender",
      "moccasin",
      "navajowhite",
      "orchid",
      "plum",
      "rebeccapurple",
      "sienna",
      "tomato",
      "violet",
      "wheat",
      "yellowgreen"
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      bgColor: "red"
    };

    this.choice = this.choice.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  choice(array) {
    let len = array.length;
    let rand = Math.floor(Math.random() * len + 1);
    return rand;
  }

  changeColor(newColor) {
    this.setState({
      bgColor: newColor
    });
  }

  render() {
    // let colors = this.props.colors;
    return (
      <div
        className="button-list"
        style={{ backgroundColor: this.state.bgColor }}
      >
        {this.props.colors.map(color => {
          const colorObj = { backgroundColor: color };
          return (
            <button
              style={colorObj}
              onClick={this.changeColor.bind(this, color)}
            >
              Click
            </button>
          );
        })}
      </div>
    );
  }
}

export default ButtonBG;
