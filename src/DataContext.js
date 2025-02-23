import { useState, createContext, useEffect } from "react";
import { getAnalyticsData } from "./data-layer/requests";
import { DEFAULT_FILTERS } from "./data-layer/types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [activeFilters, setActiveFilters] = useState(DEFAULT_FILTERS);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getAnalyticsData(page);
      if (data) {
        setData(data);
        if (!filteredData) setFilteredData([...data]);
      }
    } catch (err) {
      console.log("error", err);
      setError(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loading,
        error,
        setPage,
        page,
        filteredData,
        setFilteredData,
        activeFilters,
        setActiveFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
