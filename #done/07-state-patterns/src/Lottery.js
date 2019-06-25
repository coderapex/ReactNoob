import React, { Component } from "react";
import LottoBall from "./LottoBall";
import "./Lottery.css";
class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);

    this.state = { nums: Array.from({ length: this.props.numBalls }) };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.generate();
  };

  generate() {
    // generate a bunch of random numbers
    // in the range of 0 to maxNum
    let max = this.props.maxNum;

    this.setState(curState => ({
      nums: curState.nums.map(n => Math.floor(Math.random() * max + 1))
    }));
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <LottoBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
