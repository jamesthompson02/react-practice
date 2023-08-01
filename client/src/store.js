import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./State/search/index";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
