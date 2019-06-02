import React, { Component } from "react";
import "./NumClicker.css";

class NumClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 0,
      gameWon: false
    };
    this.setRandom = this.setRandom.bind(this);
  }
  setRandom = e => {
    let num = Math.floor(Math.random() * 10);
    this.setState({ random: num });
    if (num === 7) {
      this.setState({ gameWon: true });
    }
  };
  render() {
    let randNum = this.state.random;
    let gameResult = this.state.gameWon;
    let clickButton = <button onClick={this.setRandom}>Click Me!</button>;

    return (
      <div class="NumClicker">
        <h1>NumCliker - Get 7...</h1>
        <h2>Random mumber chosen : {randNum}</h2>
        {gameResult ? "You Win!" : clickButton}
      </div>
    );
  }
}

export default NumClicker;
