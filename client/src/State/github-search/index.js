import { createSlice } from "@reduxjs/toolkit";

const initState = {
  githubUsername: "",
  awaitingApiResponse: false,
};

const githubSearchSlice = createSlice({
  name: "Github Search",
  initialState: initState,
  reducers: {
    updateGithubUsername: (state, action) => {
      const updatedGithubUsername = action.payload;
      return { ...state, githubUsername: updatedGithubUsername };
    },
    updateAwaitingStatus: (state, action) => {
      return { ...state, awaitingApiResponse: !state.awaitingApiResponse };
    },
  },
});

export const { updateGithubUsername, updateAwaitingStatus } =
  githubSearchSlice.actions;
export default githubSearchSlice.reducer;
