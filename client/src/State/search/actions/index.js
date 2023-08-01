export const updateSearchTerm = (searchTerm) => {
  return {
    type: "UPDATE SEARCH TERM",
    payload: searchTerm,
  };
};
