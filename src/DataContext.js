import { useState, createContext, useEffect } from "react";
import { getAnalyticsData } from "./data-layer/requests";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const data = await getAnalyticsData(page);
    if (!data) setError("error loading data");
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <DataContext.Provider
      value={{ data, setData, loading, error, setPage, page }}
    >
      {children}
    </DataContext.Provider>
  );
};
