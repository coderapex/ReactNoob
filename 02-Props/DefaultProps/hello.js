class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous"
  };
  render() {
    console.log(this.props);
    return (
      <div>
        Hello {this.props.to} from {this.props.from}
      </div>
    );
  }
}
