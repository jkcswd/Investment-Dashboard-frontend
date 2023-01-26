const fetchData =  async (tickerSymbol, dateTo, dateFrom) => {
  try{
    const response = await fetch(`/symbol/${tickerSymbol}?from=${dateFrom}&to=${dateTo}`)
    const data = await response.json()

    return data;
  }catch (err) {
    console.log(err.message)
  }
}

export default fetchData;