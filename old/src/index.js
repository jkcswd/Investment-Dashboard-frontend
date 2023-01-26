import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/styles.css';
import App from './components/App/App';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChartDisplay from './components/ChartDisplay/ChartDisplay';
import TableDisplay from './components/TableDisplay/TableDisplay';
import DailyDisplay from './components/DailyDisplay/DailyDisplay';
import PortfolioTracker from './components/PortfolioTracker/PortfolioTracker';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "charts",
        element: <ChartDisplay/>,
      },
      {
        path: "/datasets",
        element: <TableDisplay/>,
      },
      {
        path: "/daily-report",
        element: <DailyDisplay/>,
      },
      {
        path: "/portfolio-tracker",
        element: <PortfolioTracker/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
