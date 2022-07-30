import { useState, useEffect } from 'react';

// Created separate presentation and application logic and increase usability of logic

const useFetchData = (symbol, dateTo = '2100-01-01', dateFrom = '1900-01-01') => {
  const [data, setData] = useState(null);

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