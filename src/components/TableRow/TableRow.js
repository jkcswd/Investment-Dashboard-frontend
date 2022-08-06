import './TableRow.css'

const TableRow = (props) => {
  return (
    <tr className="TableRow">
      {Object.values(props.row).map((values, index)=> <td className='cell' key={index}>{ values }</td>)}
    </tr>
  );
}

export default TableRow;
