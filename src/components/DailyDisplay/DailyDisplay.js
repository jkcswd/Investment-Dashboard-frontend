import { useState } from "react";
import Table from '../Table/Table'


const DailyDisplay = () => {
  const [data, setData] = useState(null);

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