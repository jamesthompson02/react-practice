import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./State/search/index";
import githubSearchReducer from "./State/github-search/index";

const store = configureStore({
  reducer: {
    search: searchReducer,
    githubSearch: githubSearchReducer,
  },
});

export default store;
