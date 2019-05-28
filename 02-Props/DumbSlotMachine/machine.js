class Machine extends React.Component {
  render() {
    console.log(this.props);
    let s1 = this.props.s1;
    let s2 = this.props.s2;
    let s3 = this.props.s3;

    let result = "Loss";

    if (s1 === s2 && s1 === s3) result = "Success";

    return (
      <div>
        <p>
          {s1}
          {s2}
          {s3}
          <br />
          {result}
        </p>
      </div>
    );
  }
}
