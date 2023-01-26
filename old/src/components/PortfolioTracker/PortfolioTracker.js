import { useEffect, useState } from "react";
import fetchPortfolio from "../../apiFunctions/fetchPortfolio";
import './PortfolioTracker.css'

const PortfolioTracker = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPortfolio('Test Portfolio');
      setData(data);
    }
    
    fetchData();
  });

  const percentageCalculation = (cur,init) => {
    return (cur/init) * 100;
  }

  return (
    <div className="PortfolioTracker">
        { data && 
          <div className="tracking-container">
            <h2>{data.portfolioName}</h2>
            <p>Initial Capital: { data.initialCapital }</p>
            <p>Current Capital: { data.currentCapital }</p>
            <p>Date Opened: { new Date(data.dateOpened).toDateString() }</p>
            <p>Total ROI: { percentageCalculation(data.currentCapital,data.initialCapital) }</p>
          </div>
        }
        { !data && 
          <p>No portfolio found</p>
        }
    </div>
  )
}

export default PortfolioTracker;