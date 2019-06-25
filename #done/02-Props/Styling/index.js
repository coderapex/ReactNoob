class App extends React.Component {
  render() {
    let dirtyColors = { fontSize: "25px", backgroundColor: "yellow" };
    return (
      <div className="Machine">
        <p style={dirtyColors}>
          <Machine s1="x" s2="y" s3="z" />
          <Machine s1="x" s2="y" s3="x" />
          <Machine s1="x" s2="x" s3="x" />
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
