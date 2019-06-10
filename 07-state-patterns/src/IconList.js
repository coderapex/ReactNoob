import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      icons: []
    };

    this.addIcon = this.addIcon.bind(this);
  }

  addIcon = e => {
    let idx = Math.floor(Math.random() * this.props.options.length);
    console.log(idx);
    let newIcon = this.props.options[idx];

    // make a copy of icons in current state
    let oldIconList = this.state.icons;

    // append the new icon to the list
    let newIconList = [...oldIconList, newIcon];

    // return the new state list
    this.setState(curSt => {
      return { icons: newIconList };
    });
  };

  render() {
    const iconListToRender = this.state.icons.map(i => (
      <i className={`fa fa-${i}`} />
    ));

    return (
      <div>
        <h1>IconList Component</h1>
        <div className="icon-list">{iconListToRender}</div>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconList;
