class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>;
        <img src="https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
