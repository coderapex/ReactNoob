import React, { Component } from "react";
import "./CoinFlip.css";
class CoinDisplay extends Component {
  render() {
    return (
      <div>
        {/* coin image */}
        <img className="coin-img" src={this.props.coinType} />
      </div>
    );
  }
}

export default CoinDisplay;
