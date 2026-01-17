import React from "react";

function Hope(props) {
  console.log(props);
  const { name, number } = props; // destructuring Props
  return (
    <div>
      {/*without destructuring:
       <h1>Name: {props.name} </h1>
       <h2>Number: {props.number} </h2> */}
      <h1>Name: {name}</h1>
      <h2>Number: {number}</h2>
    </div>
  );
}

export default Hope;
