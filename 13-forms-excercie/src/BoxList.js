import React, { Component } from "react";
import uuid from "uuid/v4";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [
        { height: 50, width: 80, bg: "red", id: uuid() },
        { height: 50, width: 100, bg: "blue", id: uuid() },
        { height: 50, width: 90, bg: "green", id: uuid() }
      ]
    };

    this.addItem = this.addItem.bind(this);
  }
  addItem(box) {
    this.setState(state => ({
      boxes: [...state.boxes, box]
    }));
  }
  QQ11;
  render() {
    let styleSet = {};
    return (
      <span>
        <NewBoxForm />
        {this.state.boxes.map(box => (
          <div
            style={{
              width: box.width,
              height: box.height,
              backgroundColor: box.bg,
              margin: 10
            }}
          />
        ))}
      </span>
    );
  }
}

export default BoxList;
