import './App.css';
import ChartDisplay from './components/ChartDisplay';
import TableDisplay from './components/TableDisplay'

const App = () => {

  return (
    <div className="App">
      <header><h1>Investment Dashboard</h1></header>
      <main>
        <ChartDisplay/>
        <TableDisplay/>
      </main>
      <footer>Created by James Spencer</footer>
    </div>
  );
}

export default App;
