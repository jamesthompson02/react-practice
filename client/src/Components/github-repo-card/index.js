import React from "react";
import Header from "../header/Header";
import SubHeader from "../subheader/SubHeader";
import "./index.css";

const GithubRepoCard = ({
  title,
  owner,
  description,
  creationDate,
  stargazers,
  watchers,
}) => {
  return (
    <div className="repo-card-container">
      <Header text={title}></Header>
      <SubHeader text={owner} size={5}></SubHeader>
      <p>{description}</p>
      <div className="repo-card-attributes">
        <p>Date of Creation: {new Date(creationDate).toDateString()}</p>
        <p>Stargazers Count: {stargazers}</p>
        <p>Watchers Count: {watchers}</p>
      </div>
    </div>
  );
};

export default GithubRepoCard;
