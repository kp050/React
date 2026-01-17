import React from "react";

function FunctionEventHandling() {
  const handleclick = () => {
    console.log("clicked it");
  };
  return <button onClick={handleclick}>Button</button>;
}

export default FunctionEventHandling;
