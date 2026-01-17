import React, { Component } from "react";

class MobileClassComponent extends Component {
  render() {
    console.log(this.props.mobile);

    let data = this.props.mobile.map((value) => {
      console.log(value);
      return (
        <div className="main">
          <div className="image">
            <img src={value.url} width="400px" height="400px" />
          </div>
          <div className="content">
            <h1>{value.name}</h1>
            <p>{value.about}</p>
            <div className="buttons">
              <button className="buy">Add to cart</button>
              <button className="buy">Buy Now</button>
            </div>
          </div>
        </div>
      );
    });
    return <div className="mobile">{data}</div>;
  }
}

export default MobileClassComponent;
