import { useState } from 'react';
import './App.css';
import ChartDisplay from './components/ChartDisplay';
import TableDisplay from './components/TableDisplay'

const App = () => {
  const [showChart, setShowChart] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="App">
      <header><h1>Investment Dashboard</h1></header>
      <main>
        {!showChart && !showTable &&
          <button onClick={() => setShowChart(true)}>Charts</button>
        }
        {!showChart && !showTable &&
          <button onClick={() => setShowTable(true)}>Tables</button>
        }
        {showChart &&
          <ChartDisplay/>
        }
        { showTable &&
          <TableDisplay/>
        }
      </main>
      <footer>Created by James Spencer</footer>
    </div>
  );
}

export default App;
