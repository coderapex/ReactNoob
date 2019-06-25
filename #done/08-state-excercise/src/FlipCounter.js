import React, { Component } from "react";

class FlipCounter extends Component {
  render() {
    return (
      <div>
        <h3>
          Flips: {this.props.total} Heads: {this.props.heads} Tails:{" "}
          {this.props.tails}
        </h3>
      </div>
    );
  }
}

export default FlipCounter;
