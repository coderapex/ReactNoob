import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      gameOVer: false
    };
  }

  render() {
    return (
      <div>
        <h2>Game!</h2>
        <h3>Score: {this.state.score} </h3>
        <h3>Game Over: {this.state.gameOVer ? "Yes!" : "No"} </h3>
      </div>
    );
  }
}

export default Game;
