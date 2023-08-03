import React from "react";
import GithubRepoList from "../../Components/github-repo-list";
import GithubSearchForm from "../../Components/github-search-form/index";
import "./index.css";

const GithubPage = () => {
  return (
    <div className="github-page-container">
      <GithubSearchForm></GithubSearchForm>
      <GithubRepoList></GithubRepoList>
    </div>
  );
};

export default GithubPage;
