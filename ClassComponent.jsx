import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    console.log("i have props", this.props);
    return (
      <div>
        <h1>
          My Class Component {this.props.name} {this.props.number}
        </h1>
      </div>
    );
  }
}

export default ClassComponent;
