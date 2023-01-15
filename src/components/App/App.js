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
  const [showDailyReport, setShowDailyReport] = useState(false);

  return (
    <div className="App">
      <header>
          <h1><a href='/'>InDash</a></h1>
          <nav>
            <button className='nav-button' onClick={() => setShowChart(true)}>Charts</button>
            <button className='nav-button' onClick={() => setShowTable(true)}>Tables</button>
            <button className='nav-button' onClick={() => setShowDailyReport(true)}>Daily Report</button>
          </nav>
      </header>
      <main>
        {!showChart && !showTable && !showDailyReport &&
          <button className='main-button' onClick={() => setShowChart(true)}>Charts</button>
        }
        {!showChart && !showTable &&  !showDailyReport &&
          <button  className='main-button' onClick={() => setShowTable(true)}>Tables</button>
        }
        {!showChart && !showTable && !showDailyReport &&
          <button  className='main-button' onClick={() => setShowDailyReport(true)}>Daily Report</button>
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
      <footer><p>Created by James Spencer 2023</p></footer>
    </div>
  );
}

export default App;
