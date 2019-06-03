import React, { Component } from "react";

class Killer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      single: 0,
      triple: 0,
      count: 0
    };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  singleKill = e => {
    // updating single counter
    this.setState({ single: this.state.single + 1 });

    // updating total counter
    this.setState({ count: this.state.count + 1 });
  };

  tripleKill = e => {
    // updating triple counter
    this.setState({ triple: this.state.triple + 3 });

    // updating total counter - DOES NOT WORK
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });

    // use the "callback form" to setState()
    // SYNTAX : this.setState(callback)
    // we pass current state as parameter in callback
    // then we return the new value which we update using currentState values
    this.setState(currentState => {
      return { count: currentState.count + 1 };
    });
    this.setState(currentState => {
      return { count: currentState.count + 1 };
    });
    this.setState(currentState => {
      return { count: currentState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>Killer</h1>
        <h2>Kill Count : {this.state.count}</h2>
        <h3>
          Single : {this.state.single} Triple : {this.state.triple}
        </h3>
        <button onClick={this.singleKill}>Single</button>
        <button onClick={this.tripleKill}>Triple</button>
      </div>
    );
  }
}

export default Killer;
