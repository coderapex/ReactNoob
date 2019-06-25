class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          img="https://rishabh1403.com/images/avatar.png"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
