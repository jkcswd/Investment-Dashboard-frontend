import './App.css';
import ChartDisplay from './components/chartDispaly';


const App = () => {

  return (
    <div className="App">
      <header><h1>Investment Dashboard</h1></header>
      <main>
        <ChartDisplay/>
      </main>
      <footer>Created by James Spencer</footer>
    </div>
  );
}

export default App;
