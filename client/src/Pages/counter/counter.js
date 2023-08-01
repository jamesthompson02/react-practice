import React from "react";
import "./counter.css";
import Header from "../../Components/header/Header";
import NumberDisplay from "../../Components/number-display";
import { useState } from "react";
import Button from "../../Components/button/button";
import TestForm from "../../Components/test-form";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(false);

  const minusOne = () => {
    setDisplay(false);
    setCounter((prevState) => prevState - 1);
  };

  const resetToZero = () => {
    setDisplay(false);
    setCounter(0);
  };

  const addOne = () => {
    setDisplay(false);
    setCounter((prevState) => prevState + 1);
  };

  const generateRandomNumber = () => {
    setDisplay(false);
    const randomNumber = Math.floor(Math.random() * 2000) - 1000;
    setCounter(randomNumber);
  };

  const displayMessage = () => {
    setDisplay(true);
  };

  const isPrime = (number) => {
    if (number < 2) {
      return `No, ${number} is not a prime`;
    }
    if (number === 2 || number === 3) {
      return `Yes, ${number} is a prime number`;
    }
    if (number >= 4) {
      return checkPrimeForFourorMore(number);
    }
  };

  const checkPrimeForFourorMore = (number) => {
    let primeArray = [];
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0 && number !== i) {
        primeArray.push(i);
      }
    }
    if (!primeArray.length) {
      return `Yes, ${number} is a prime number.`;
    } else {
      return `No, ${number} is not a prime.`;
    }
  };

  return (
    <div className="container-background">
      <Header text="Counter"></Header>
      <NumberDisplay number={counter}></NumberDisplay>
      <div>
        <Button text="Minus One" func={minusOne}></Button>
        <Button text="Randomise" func={generateRandomNumber}></Button>
        <Button text="Reset" func={resetToZero}></Button>
        <Button text="Prime?" func={displayMessage}></Button>
        <Button text="Add One" func={addOne}></Button>
      </div>
      <div>{display ? <p>{isPrime(counter)}</p> : null}</div>
      <div>
        <TestForm></TestForm>
      </div>
    </div>
  );
};

export default Counter;
