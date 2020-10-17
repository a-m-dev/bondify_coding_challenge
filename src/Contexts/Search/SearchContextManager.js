import { useState, useCallback } from "react";

const SearchContextManager = () => {
  const [query, setQuery] = useState("");

  const handleSearchQuery = useCallback(
    (e) => {
      const { value: searchQuery } = e.target;
      setQuery(searchQuery);
    },
    [setQuery]
  );

  return {
    data: { query },
    actions: { handleSearchQuery },
  };
};

export default SearchContextManager;
