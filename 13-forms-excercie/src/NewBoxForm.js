import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0,
      bg: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.addItem(this.state);
    this.setState({
      height: 0,
      width: 0,
      bg: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width: </label>
          <input
            type="textbox"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="height">Height: </label>
          <input
            type="textbox"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="bg">BG: </label>
          <input
            type="textbox"
            name="bg"
            value={this.state.bg}
            onChange={this.handleChange}
          />
          <br />
          <button>New Box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
