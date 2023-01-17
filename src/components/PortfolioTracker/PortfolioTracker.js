import { useEffect, useState } from "react";
import Table from '../Table/Table'
import fetchPortfolio from "../../apiFunctions/fetchPortfolio";


const PortfolioTracker = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPortfolio();
      console.log(data)
      setData(data);
    }
    
    fetchData();
  });

  return (
    <div className="DailyDisplay">
        { data && 
          <Table data={data}/>
        }
        { !data && 
          <p>No portfolio found</p>
        }
    </div>
  )
}

export default DailyDisplay;