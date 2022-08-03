import TableRow from "../TableRow/TableRow";

const Table = (props) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          {Object.keys(props.data[0]).map((dataHeading, index) => <th key={ index }>{ dataHeading }</th>)}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, index) => <TableRow key={ index } row={ row }/>)}
      </tbody>
    </table>
  );    
}

export default Table;
