import React, { useContext } from "react";
import SubHeader from "../subheader/SubHeader";
import Button from "../button/button";
import "./index.css";
import { BackgroundColor } from "../../Utils/backgroundColorContext";

const ColorGenerator = () => {
  const [backgroundColor, setBackgroundColor] = useContext(BackgroundColor);

  const generateColor = () => {
    const hexadecimalCharacters = "ABCDEF0123456789";
    let hexademicalString = "#";
    for (let i = 0; i < 6; i++) {
      const newChar = hexadecimalCharacters[Math.floor(Math.random() * 16)];
      hexademicalString += newChar;
    }
    setBackgroundColor(hexademicalString);
  };

  return (
    <div className="color-generator-container">
      <SubHeader text="Color Generator" size={3}></SubHeader>
      <input
        className="color-generator-input"
        type="text"
        value={backgroundColor}
      />
      <Button text="Generate Random Color" func={generateColor}></Button>
    </div>
  );
};

export default ColorGenerator;
