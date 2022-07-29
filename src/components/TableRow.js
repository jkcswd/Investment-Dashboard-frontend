const TableRow = (props) => {
  return (
    <tr className="TableRow">
      {Object.values(props.row).map((values, index)=> <td key={index}>{ values }</td>)}
    </tr>
  );
}

export default TableRow;
