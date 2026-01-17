import React, { Component } from "react";

class EventHandling extends Component {
  constructor() {
    super();
    this.state = { movie: "F1" };
  }
  handleclick = () => {
    console.log("clicked it");
  };
  render() {
    return (
      <div>
        <h1>watching {this.state.movie} </h1>
        <button onClick={this.handleclick}>Button</button>
      </div>
    );
  }
}

export default EventHandling;
