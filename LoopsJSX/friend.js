class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    console.log(name);
    console.log(hobbies);
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(h => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    );
  }
}
