import Raect, { Component } from "react";
// state is the data in the component.
// where as props is the data passed to the component.
// set state is a method used to update the state of the component.
class StateInClass extends Component {
  constructor() {
    super();
    this.state = { movie: "F1" };
  }
  render() {
    return <h1>watching {this.state.movie} movie</h1>;
  }
}

export default StateInClass;
