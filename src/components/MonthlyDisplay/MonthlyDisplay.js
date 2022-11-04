import { useState } from "react";
import Table from '../Table/Table'


const MonthlyDisplay = () => {
  const [data, setData] = useState(null);

  return (
    <div className="MonthlyDisplay">
        { data && 
          <Table data={data}/>
        }
        { !data && 
          <p>No report found</p>
        }
    </div>
  )
}

export default MonthlyDisplay;