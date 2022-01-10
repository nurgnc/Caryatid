import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  //main beers
  const [data, setData] = useState([]);
  //search
  const [search, setSearch] = useState("");
  const getFilteredItems = (search, data) => {
    if (!search) {
      return data;
    }
    return data.filter((item) => item.name.toLowerCase().includes(search));
  };

  const filteredItems = getFilteredItems(search, data);
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const beersPerPage = 6;
  const pagesVisited = pageNumber * beersPerPage;
  // abv filter data
  const [gt, setGt] = useState([]);
  const [lt, setLt] = useState([]);

  const value = {
    data,
    setData,
    search,
    setSearch,
    getFilteredItems,
    filteredItems,
    pageNumber,
    setPageNumber,
    beersPerPage,
    pagesVisited,
    gt,
    setGt,
    lt,
    setLt,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}