import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/index";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
