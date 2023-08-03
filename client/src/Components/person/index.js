import React from "react";

const Person = ({ name, removeFunc }) => {
  return (
    <div>
      <li>{name}</li>
      <button onClick={removeFunc}>Remove</button>
    </div>
  );
};

export default Person;
