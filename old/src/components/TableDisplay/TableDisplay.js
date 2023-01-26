import { useState } from "react";
import Table from '../Table/Table'
import fetchData from '../../apiFunctions/fetchData'

const TableDisplay = () => {
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
    <div className="TableDisplay">
        <form onSubmit={handleSubmit}>
          <label className="ticker-form-label" htmlFor="ticker">Ticker Symbol:</label>
          <input className="ticker-form-input" id="ticker" type="text" value={tickerSymbol} onChange={ e => setTickerSymbol(e.target.value) } />
          <label className="ticker-form-label" htmlFor="dateTo">date to:</label>
          <input className="ticker-form-input"  id="dateTo" type="date" value={dateTo} onChange={ e => setDateTo(e.target.value) } />
          <label className="ticker-form-label" htmlFor="dateFrom">date from:</label>
          <input className="ticker-form-input"  id="dateFrom" type="date" value={dateFrom} onChange={ e => setDateFrom(e.target.value) } />
          <input className="ticker-form-button" type="submit"/>
        </form>
        { data && 
          <Table data={data}/>
        }
    </div>
  )
}

export default TableDisplay;