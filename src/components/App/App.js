import { useState } from 'react';
import './App.css';
import ChartDisplay from '../ChartDisplay/ChartDisplay';
import TableDisplay from '../TableDisplay/TableDisplay';
import MonthlyDisplay from '../MonthlyDisplay/MonthlyDisplay';
import DailyDisplay from '../DailyDisplay/DailyDisplay'

const App = () => {
  // TODO:  Add components rendering composite data from the data
  const [showChart, setShowChart] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showMonthlyReport, setShowMonthlyReport] = useState(false);
  const [showDailyReport, setShowDailyReport] = useState(false);

  return (
    <div className="App">
      <header><h1><a href='/'>Investment Dashboard</a></h1></header>
      <main>
        {!showChart && !showTable && !showMonthlyReport && !showDailyReport &&
          <button onClick={() => setShowChart(true)}>Charts</button>
        }
        {!showChart && !showTable && !showMonthlyReport && !showDailyReport &&
          <button onClick={() => setShowTable(true)}>Tables</button>
        }
        {!showChart && !showTable && !showMonthlyReport && !showDailyReport &&
          <button onClick={() => setShowDailyReport(true)}>Daily Report</button>
        }
        {showChart &&
          <ChartDisplay/>
        }
        { showTable &&
          <TableDisplay/>
        }
        { showDailyReport &&
          <DailyDisplay/>
        }
        
      </main>
      <footer>Created by James Spencer</footer>
    </div>
  );
}

export default App;
