import useFetchData from './hooks/useFetchData';
import './App.css';
import Table from './components/Table';

const App = () => {
  const historicalData = useFetchData('aapl','2020-01-01', '2018-01-01');
  const headings = ['date', 'open', 'high', 'low' , 'close', 'adjClose', 'volume'];


  console.log(historicalData)
  return (
    <div className="App">
      <Table headings={headings} body={historicalData} />
    </div>
  );
}

export default App;
