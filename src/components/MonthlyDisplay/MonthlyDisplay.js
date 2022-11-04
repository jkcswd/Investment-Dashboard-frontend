import { useState } from "react";
import Table from '../Table/Table'


const MonthlyDisplay = () => {
  const [data, setData] = useState(null);

  return (
    <div className="MonthlyDisplay">
        { data && 
          <Table data={data}/>
        }
    </div>
  )
}

export default MonthlyDisplay;