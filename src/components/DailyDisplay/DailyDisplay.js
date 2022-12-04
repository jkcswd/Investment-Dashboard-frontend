import { useEffect, useState } from "react";
import fetchReport from "../../apiFunctions/fetchReport";
import Table from '../Table/Table'


const DailyDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReport();
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
          <p>No report found</p>
        }
    </div>
  )
}

export default DailyDisplay;