import { useState, useEffect } from 'react';

// A custom hook for fetching data from the API to separate presentation and application logic

const useFetchData = (symbol, dateTo, dateFrom) => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetchData =  async () => {
    const response = await fetch(`/symbol/${symbol}?from=${dateFrom}&to=${dateTo}`)
    const data = await response.json()
    setData(data);
  }
    fetchData();
  }, [symbol, dateTo, dateFrom]);

  return data
}

export default useFetchData;