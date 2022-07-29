import TableRow from "./TableRow";

const Table = (props) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          {props.headings.map((heading, index) => <th key={ index }>{ heading }</th>)}
        </tr>
      </thead>
      <tbody>
        {props.body.map((row, index) => <TableRow key={ index } row={ row }/>)}
      </tbody>
    </table>
  );    
}

export default Table;
