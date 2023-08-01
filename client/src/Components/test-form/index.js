import React from "react";
import { useState } from "react";
import Button from "../button/button";
import "./index.css";

const TestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { name, email, password };
    console.log(form);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleName} />
      <input type="email" value={email} onChange={handleEmail} />
      <input type="password" value={password} onChange={handlePassword} />
      <Button text="Submit" func={handleSubmit}></Button>
    </form>
  );
};

export default TestForm;
