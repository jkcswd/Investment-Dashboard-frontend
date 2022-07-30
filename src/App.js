import useFetchData from './hooks/useFetchData';
import './App.css';
import Chart from './components/Chart';
import d3Func from './d3Functions/d3Func';

const App = () => {
  const historicalData = useFetchData('aapl'); 

  return (
    <div className="App">
      {historicalData &&
        <Chart chartData={historicalData} d3Func={d3Func}/>
      }
    </div>
  );
}

export default App;
