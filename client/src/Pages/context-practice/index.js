import React from "react";
import "./index.css";
import Header from "../../Components/header/Header";
import ColorGenerator from "../../Components/colorGenerator/index";

const ContextPage = ({ backgroundColor }) => {
  if (backgroundColor)
    return (
      <div
        style={{ backgroundColor: backgroundColor }}
        className="context-page-container"
      >
        <Header text="Context API/UseContext Hook"></Header>
        <ColorGenerator></ColorGenerator>
      </div>
    );

  return (
    <div className="context-page-container">
      <Header text="Context API/UseContext Hook"></Header>
      <ColorGenerator></ColorGenerator>
    </div>
  );
};

export default ContextPage;
