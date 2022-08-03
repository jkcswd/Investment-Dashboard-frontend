import { useState } from "react";
import Chart from './Chart';
import d3Func from '../d3Functions/d3Func'
import fetchData from '../apiFunctions/fetchData'

const ChartDisplay = () => {
  const [tickerSymbol, setTickerSymbol] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiData = await fetchData(tickerSymbol, dateTo, dateFrom)

    setData(apiData);
  }

  return (
    <div className="ChartDisplay">
        <form onSubmit={handleSubmit}>
          <label htmlFor="ticker">Ticker Symbol:</label>
          <input id="ticker" type="text" value={tickerSymbol} onChange={ e => setTickerSymbol(e.target.value) } />
          <label htmlFor="dateTo">date to:</label>
          <input id="dateTo" type="date" value={dateTo} onChange={ e => setDateTo(e.target.value) } />
          <label htmlFor="dateFrom">date from:</label>
          <input id="dateFrom" type="date" value={dateFrom} onChange={ e => setDateFrom(e.target.value) } />
          <input type="submit"/>
        </form>
        { data && 
          <Chart chartData={data} d3Func={d3Func}/>
        }
    </div>
  )
}

export default ChartDisplay;