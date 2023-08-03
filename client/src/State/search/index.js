import { createSlice } from "@reduxjs/toolkit";

const initState = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initState,
  reducers: {
    updateSearchTerm: (state, action) => {
      const updatedSearchTerm = action.payload;
      state.searchTerm = updatedSearchTerm;
    },
  },
});

export const { updateSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
