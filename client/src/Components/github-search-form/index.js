import React, { useRef } from "react";
import SubHeader from "../subheader/SubHeader";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import {
  updateGithubUsername,
  updateAwaitingStatus,
} from "../../State/github-search";
import { useSelector } from "react-redux";
import "./index.css";

const GithubSearchForm = () => {
  const dispatch = useDispatch();
  const searchInput = useRef();

  const loadingStatus = useSelector(
    (state) => state.githubSearch.awaitingApiResponse
  );

  const handleSubmitEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(updateGithubUsername(searchInput.current.value));
      dispatch(updateAwaitingStatus());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGithubUsername(searchInput.current.value));
    dispatch(updateAwaitingStatus());
  };

  return (
    <form className="github-search-form-container">
      <SubHeader text="Search GitHub users' repositories"></SubHeader>
      <input ref={searchInput} onKeyDown={handleSubmitEnterKey} />
      <Button text="Search" func={handleSubmit}></Button>
    </form>
  );
};

export default GithubSearchForm;
