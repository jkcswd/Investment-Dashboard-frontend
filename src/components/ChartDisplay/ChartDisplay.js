import { useState } from "react";
import Chart from '../Chart/Chart';
import d3Func from '../../d3Functions/d3Func'
import fetchData from '../../apiFunctions/fetchData'
import './ChartDisplay.css'

const ChartDisplay = () => {
  // TODO: refactor form to allow use in chart or table
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
          <label htmlFor="ticker">Symbol:</label>
          <input id="ticker" type="text" value={tickerSymbol} onChange={ e => setTickerSymbol(e.target.value) } />
          <label htmlFor="dateFrom">From:</label>
          <input id="dateFrom" type="date" value={dateFrom} onChange={ e => setDateFrom(e.target.value) } />
          <label htmlFor="dateTo">To:</label>
          <input id="dateTo" type="date" value={dateTo} onChange={ e => setDateTo(e.target.value) } />
          <input type="submit"/>
        </form>
        { data && 
          <Chart chartData={data} d3Func={d3Func}/>
        }
    </div>
  )
}

export default ChartDisplay;