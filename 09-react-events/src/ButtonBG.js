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
  }

  choice(array) {
    let len = array.length;
    let rand = Math.floor(Math.random() * len + 1);
    return rand;
  }

  render() {
    let colors = this.props.colors;
    return (
      <div className="ButtonBG" style={{ backgroundColor: this.state.bgColor }}>
        <button
          onClick={this.changeBG}
          style={{
            background: colors[this.choice(colors)]
          }}
        >
          CLick Me!
        </button>
        <button
          style={{
            background: colors[this.choice(colors)]
          }}
        >
          CLick Me!
        </button>
        <button
          style={{
            background: colors[this.choice(colors)]
          }}
        >
          CLick Me!
        </button>
      </div>
    );
  }
}

export default ButtonBG;
