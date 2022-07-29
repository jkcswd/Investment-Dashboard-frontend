import useFetchData from './hooks/useFetchData';
import './App.css';
import Table from './components/Table';

const App = () => {
  const historicalData = useFetchData('aapl','2020-01-01', '2018-01-01'); 

  return (
    <div className="App">
      {historicalData && // stop the component from attempting render before API has been fetched
        <Table data={historicalData} />
      }
    </div>
  );
}

export default App;
