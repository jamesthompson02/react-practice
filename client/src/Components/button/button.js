import React from "react";

const Button = ({ text, func, disabled = false }) => {
  return (
    <button onClick={func} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
