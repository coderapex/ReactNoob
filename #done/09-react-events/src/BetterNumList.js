import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";
class BetterNumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };

    this.remove = this.remove.bind(this);
  }

  remove(removeNum) {
    console.log("Removing: " + removeNum);

    this.setState({
      nums: this.state.nums.filter(function(value) {
        return value !== removeNum;
      })
    });
  }

  render() {
    let nums = this.state.nums.map(n => (
      <BetterNumberItem value={n} remove={this.remove} />
    ));
    return (
      <div>
        <h3>Num BetterNumList</h3>
        {nums}
      </div>
    );
  }
}

export default BetterNumList;
