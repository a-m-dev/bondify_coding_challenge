import React from "react";
import { SearchBox } from "./styles";
import useSearchContext from "../../Contexts/Search/SearchContext";

const Search = () => {
  const {
    data: { query },
    actions: { handleSearchQuery },
  } = useSearchContext();

  return (
    <SearchBox
      value={query}
      onChange={handleSearchQuery}
      placeholder="search cryptocurrencies, rates and prices"
    />
  );
};

export default Search;
