import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateA: 0,
      stateB: 0
    };
    this.roll = this.roll.bind(this);
  }

  roll = e => {
    let a = Math.floor(Math.random() * 6);
    let b = Math.floor(Math.random() * 6);
    this.setState({ stateA: a, stateB: b });
  };
  render() {
    return (
      <div className="RollDice">
        <h1>RollDice Component</h1>
        <Die side={this.state.stateA} />
        <Die side={this.state.stateB} />
        <div className="roll-button">
          <button onClick={this.roll}>Roll Dice!</button>
        </div>
      </div>
    );
  }
}

export default RollDice;
