import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let diceClass = [
      "fa fa-dice-one",
      "fa fa-dice-two",
      "fa fa-dice-three",
      "fa fa-dice-four",
      "fa fa-dice-five",
      "fa fa-dice-six"
    ];

    let chosen = this.props.side;

    return (
      <span className="Die">
        <span className="show-dice">
          <i className={diceClass[chosen]} />
        </span>
      </span>
    );
  }
}

export default Die;
