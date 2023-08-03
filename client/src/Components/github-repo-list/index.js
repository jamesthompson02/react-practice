import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateAwaitingStatus } from "../../State/github-search";
import GithubRepoCard from "../github-repo-card";
import { keyGenerator } from "../../Utils/keyGenerator";
import "./index.css";

const GithubRepoList = () => {
  const [repos, setRepos] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();

  const githubUsername = useSelector(
    (state) => state.githubSearch.githubUsername
  );

  const loadingStatus = useSelector(
    (state) => state.githubSearch.awaitingApiResponse
  );

  const renderRepos = () => {
    return repos.map((repo) => {
      return (
        <GithubRepoCard
          key={keyGenerator}
          title={repo.name}
          owner={repo.owner.login}
          description={repo.description}
          creationDate={repo.created_at.substring(0, 10)}
          stargazers={repo.stargazers_count}
          watchers={repo.watchers_count}
        ></GithubRepoCard>
      );
    });
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${githubUsername}/repos`
        );
        setErrorMsg("");
        console.log(data);
        setRepos(data);
        dispatch(updateAwaitingStatus());
        return data;
      } catch (err) {
        setErrorMsg(err.message);
        setRepos([]);
        dispatch(updateAwaitingStatus());
      }
    };
    if (!githubUsername) {
      return;
    } else {
      fetchRepos();
    }
  }, [githubUsername]);

  return (
    <div className="github-repo-list-container">
      {loadingStatus ? <p>Loading...</p> : null}
      {!repos.length && !githubUsername && !loadingStatus && !errorMsg ? (
        <p>Search for a GitHub User</p>
      ) : null}
      {!repos.length && githubUsername && !errorMsg && !loadingStatus ? (
        <p>This user has no repos</p>
      ) : null}
      {!repos.length && githubUsername && errorMsg && !loadingStatus ? (
        <p>{errorMsg}</p>
      ) : null}
      {repos.length && githubUsername && !errorMsg && !loadingStatus
        ? repos.map((repo) => {
            return (
              <GithubRepoCard
                key={keyGenerator()}
                title={repo.name}
                owner={repo.owner.login}
                description={repo.description}
                creationDate={repo.created_at}
                stargazers={repo.stargazers_count}
                watchers={repo.watchers_count}
              ></GithubRepoCard>
            );
          })
        : null}
    </div>
  );
};

export default GithubRepoList;
