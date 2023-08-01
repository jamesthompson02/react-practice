import React from "react";
import "./SubHeader.css";

const SubHeader = ({ size, text }) => {
  if (size === 3) {
    return <h3 className="no-margin">{text}</h3>;
  }

  if (size === 4) {
    return <h4 className="no-margin">{text}</h4>;
  }

  if (size === 5) {
    return <h5 className="no-margin">{text}</h5>;
  }

  if (size === 6) {
    return <h6 className="no-margin">{text}</h6>;
  }

  return <h2 className="no-margin">{text}</h2>;
};

export default SubHeader;
