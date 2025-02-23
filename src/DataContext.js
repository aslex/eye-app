import { useState, createContext, useEffect } from "react";
import { getAnalyticsData } from "./data-layer/requests";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getAnalyticsData(page);
      if (!data) setError("error loading data");
      else setData(data);
      if (!filteredData) setFilteredData([...data]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
