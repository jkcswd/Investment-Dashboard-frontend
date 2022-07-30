import useFetchData from './hooks/useFetchData';
import './App.css';
import Chart from './components/Chart';

const App = () => {
  const historicalData = useFetchData('aapl'); 
  console.log(historicalData)

  return (
    <div className="App">
      {historicalData &&
        <Chart chartData={historicalData}/>
      }
    </div>
  );
}

export default App;
