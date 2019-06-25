import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import BoxList from "./BoxList";

class Box extends Component {
  render() {
    return (
      <div>
        <NewBoxForm />
        <BoxList />
      </div>
    );
  }
}

export default Box;
