import React, { useState } from "react";
import "./index.css";
import Header from "../header/Header";
import Button from "../button/button";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../../Utils/formValidation";

const UncontrolledForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [validForm, setValidForm] = useState(true);

  const handleChange = (e) => {
    setUser((prevState) => {
      const newUserData = { ...prevState, [e.target.name]: e.target.value };
      formValidation(newUserData);
      return newUserData;
    });
  };

  const formValidation = (userData) => {
    if (
      nameValidation(userData.name) &&
      emailValidation(userData.email) &&
      passwordValidation(userData.password)
    ) {
      return setValidForm(false);
    }
    return setValidForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="uncontrolled-form-container">
      <Header text="Uncontrolled Inputs form"></Header>
      <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          className="form-input"
          type="text"
          id="name"
          name="name"
        ></input>
      </div>
      <div className="form-row">
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          className="form-input"
          type="email"
          id="email"
          name="email"
        ></input>
      </div>
      <div className="form-row">
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          className="form-input"
          type="password"
          id="password"
          name="password"
        ></input>
      </div>
      <Button text="Submit" disabled={validForm}></Button>
    </form>
  );
};

export default UncontrolledForm;
