import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Die">
        <h1>Die Component</h1>
        <span className="show-dice">
          <i className="fa fa-dice-one" />
          <i className="fa fa-dice-two" />
        </span>
      </div>
    );
  }
}

export default Die;
