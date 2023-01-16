import { useState } from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <header>
          <h1><a href='/'>InDash</a></h1>
          <nav className='main-nav'>
            <ul>
              <li><Link to={`/charts`}>Economic Data and Financial Securities Charts</Link></li>
              <li><Link to={`/datasets`}>Economic Data and Financial Securities Tabular Data</Link></li>
              <li><Link to={`/daily-report`}>Daily Report</Link></li>
            </ul>
          </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer><p>Created by James Spencer 2023</p></footer>
    </div>
  );
}

export default App;
