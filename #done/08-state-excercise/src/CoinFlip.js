import React, { Component } from "react";
import "./CoinFlip.css";
import CoinDisplay from "./CoinDisplay";
import FlipCounter from "./FlipCounter";
class CoinFlip extends Component {
  static defaultProps = {
    headsSrc:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
    tailsSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
  };

  constructor(props) {
    super(props);

    // coinState 0: heads - 1: tails
    this.state = {
      coinState: 0,
      coinImg: "",
      flipCount: 0,
      headCount: 0,
      tailCount: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.flipCoin();
  };

  flipCoin() {
    // flip coin and manage state
    let num = Math.floor(Math.random() * 100);

    if (num % 2 === 0) {
      this.setState(curState => {
        return {
          coinState: 0,
          coinImg: this.props.headsSrc,
          headCount: curState.headCount + 1,
          flipCount: curState.flipCount + 1
        };
      });
    } else {
      this.setState(curState => {
        return {
          coinState: 1,
          coinImg: this.props.tailsSrc,
          tailCount: curState.tailCount + 1,
          flipCount: curState.flipCount + 1
        };
      });
    }
  }

  render() {
    return (
      <div>
        {/* result count */}
        <FlipCounter
          total={this.state.flipCount}
          heads={this.state.headCount}
          tails={this.state.tailCount}
        />

        {/* button - flip coin */}
        <button onClick={this.handleClick}>Flip</button>

        <CoinDisplay coinType={this.state.coinImg} />
      </div>
    );
  }
}

export default CoinFlip;
